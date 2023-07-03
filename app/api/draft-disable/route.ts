import { draftMode } from 'next/headers';

export async function GET() {
  draftMode().disable();

  /**
   * Currently redirecting the to the requesting page, does not do a full refresh.
   * This is because of NextJs caching and performance improvements.
   */
  return new Response(
    'You have exited draft mode. Please go back to the previous page.'
  );
}
