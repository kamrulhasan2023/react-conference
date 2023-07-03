import { ISanityCustomPortableText } from 'src/backend/queries/portable-text/interface';

export interface ISanityCommonSectionFields<T> {
  _type: T;
  editorTitle?: string;
  title: string;
  subtitle?: string;
  description?: ISanityCustomPortableText;
}
