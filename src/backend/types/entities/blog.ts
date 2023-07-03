import { ISanityCustomPortableText } from 'src/backend/queries/portable-text/interface';
import { ISanityCustomImage } from 'src/backend/queries/media/interface';
import { ISanityEntityPageFields } from '../entity-page-fields';

export interface ISanityBlog extends ISanityEntityPageFields {
  title: string;
  description: string;
  blogContent: ISanityCustomPortableText;
  customImageSchema: ISanityCustomImage;
  tags: {
    bgColor: { hex: string };
    fontColor: { hex: string };
    title: string;
  }[];
  isFeaturedBlog: boolean;
}
