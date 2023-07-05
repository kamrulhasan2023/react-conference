// import Hero from '@sections/hero';
// import { heroProps } from '@sections/hero/mock-data';
// import { Metadata } from 'next';
// //import { cache } from 'react';
// //import { client, previewClient } from 'src/backend/client';
// //import { homePageQuery } from '../src/builder/page/home/query';
// //import { ISanityHomePage } from '../src/builder/page/home/query/interface';
// import { SectionBuilder } from 'src/builder/sections';
// import Container from '@components/container';
// import BlogCard from '@components/cards/blog';
// import { generateImageUrlFixedDimensions } from 'src/backend/generate-image';
// import { BLOG_IMAGE_DIMENSION } from '@components/cards/blog/interface';
// import { WithContext, Organization } from 'schema-dts';
// import { generateMetaObject } from 'src/utils/generate-meta-data';
// // import { draftMode } from 'next/headers';

import Hero from '@components/hero';
import {heroProps} from  "@components/hero/mock-data";

// // const getPageData = cache(async () => {
// //   let data;
// //   const { isEnabled } = draftMode();

// //   if (isEnabled) {
// //     data = await previewClient.fetch<ISanityHomePage>(homePageQuery);
// //   } else {
// //     data = await client.fetch<ISanityHomePage>(homePageQuery);
// //   }

// //   return data;
// // });

// // export async function generateMetadata(): Promise<Metadata> {
// //   const data = await getPageData();
// //   return generateMetaObject({
// //     metaDescription: data.metaDescription,
// //     metaTitle: data.metaTitle,
// //     siteName: 'Next Js Starter',
// //     openGraphInfo: data.openGraphInfo,
// //   });
// // }

// // export default async function Page() {
// //   const data = await getPageData();
// //   const jsonLd: WithContext<Organization> = {
// //     '@context': 'https://schema.org',
// //     '@type': 'Organization',
// //     name: data.metaTitle,
// //     image: `/api/open-graph-images`,
// //     description: data.metaDescription,
// //     url:
// //       process.env.NEXT_PUBLIC_SITE_URL || 'https://' + process.env.VERCEL_URL,
// //   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
//       <Hero {...heroProps} />
//       <SectionBuilder sections={data.sections} />
//       <Container>
//         <div className="mb-2 mt-2 grid grid-cols-3 gap-5">
//           {data.blogs.map((blog) => {
//             const blogImage = generateImageUrlFixedDimensions(
//               blog.customImageSchema,
//               BLOG_IMAGE_DIMENSION.width,
//               BLOG_IMAGE_DIMENSION.height
//             );
//             return (
//               <BlogCard
//                 description={blog.description}
//                 href={`/blogs/${blog.slug.current}`}
//                 tags={blog.tags}
//                 title={blog.title}
//                 image={{
//                   src: blogImage.src,
//                   alt: blogImage.alt,
//                   lqip: blogImage.lqip,
//                 }}
//                 isFeatured={blog.isFeaturedBlog}
//                 key={blog.title}
//               />
//             );
//           })}
//         </div>
//       </Container>
//     </>
//   );
// }

export default async function Event() {
  return (
    <>
      <Hero  {...heroProps} />
    </>
  );
}
