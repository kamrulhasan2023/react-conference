import { ISanitySlug } from './slug';

export interface ISanityEntityPageFields {
  title: string;
  metaTitle?: string;
  metaDescription: string;
  openGraphInfo?: {
    title?: string;
    description?: string;
  };
  slug: ISanitySlug;
}
