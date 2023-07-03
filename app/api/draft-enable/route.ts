import groq from 'groq';
import { draftMode } from 'next/headers';
import { previewClient } from 'src/backend/client';

export async function GET(request: Request) {
  const SANITY_PREVIEW_SECRET = process.env.SANITY_PREVIEW_SECRET;

  if (!SANITY_PREVIEW_SECRET) {
    return new Response('No Secret', { status: 401 });
  }

  // Parse query string parameters
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const type = searchParams.get('_type');
  const slug = searchParams.get('slug');
  let verifiedSlug = '';

  // Check the secret and next parameters
  // This secret should only be known to this route handler and the CMS
  if (secret !== SANITY_PREVIEW_SECRET) {
    return new Response('Invalid secret', { status: 401 });
  }

  // Check if slug is valid and exists
  if (slug) {
    try {
      const matchedSlugs = await previewClient.fetch<string[]>(
        groq`*[_type == "${type}" && slug.current == "${slug}"].slug.current`
      );
      verifiedSlug = matchedSlugs[0];
    } catch (e) {
      // Error fetching slugs
      return new Response('Error validating slugs. Please contact dev team.', {
        status: 401,
      });
    }
  } else {
    // No Slug.
    return new Response('No Slug', { status: 401 });
  }

  // Check the type parameter and assign location accordingly.
  // We cant allow users to include prefixes in slugs because it messes with generateStaticParams method
  // of nextjs
  let location: string;

  switch (type) {
    case 'homePage':
      location = verifiedSlug;
      break;
    case 'blog':
      location = `/blogs/${verifiedSlug}`;
      break;
    default:
      return new Response('Invalid type', { status: 401 });
  }

  // Enable Draft Mode by setting the cookie
  draftMode().enable();

  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  return new Response(null, {
    status: 307,
    headers: {
      Location: location,
    },
  });
}
