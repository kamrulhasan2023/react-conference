interface GenerateMetaObjectArgs {
  metaTitle: string;
  metaDescription: string;
  openGraphInfo?: {
    title?: string;
    description?: string;
  };
  siteName: string;
  // CAUTION: This is the url segement to attact to our base url. Please start with a `/`
  urlSegment?: string;
}

export function generateMetaObject({
  metaDescription,
  metaTitle,
  siteName,
  openGraphInfo,
  urlSegment = '',
}: GenerateMetaObjectArgs) {
  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: openGraphInfo?.title || metaTitle,
      description: openGraphInfo?.description || metaDescription,
      siteName: siteName,
      url:
        process.env.NEXT_PUBLIC_SITE_URL + urlSegment ||
        'https://' + process.env.VERCEL_URL,
      images: [
        {
          url: `/api/open-graph-images`,
          width: 1200,
          height: 600,
          alt: openGraphInfo?.title || metaTitle,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphInfo?.title || metaTitle,
      description: openGraphInfo?.description || metaDescription,
      images: [`/api/open-graph-images`],
    },
  };
}
