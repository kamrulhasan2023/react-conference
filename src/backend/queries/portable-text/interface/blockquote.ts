import { ISanityCustomVideo, ISanityCustomImage } from '../../media/interface';
import { PortableTextBlock } from '@portabletext/types';

export interface ISanityBlockquote {
  _key: string;
  _type: 'blockquote';
  content: [PortableTextBlock | ISanityCustomImage | ISanityCustomVideo];
  editorTitle?: string;
  markDefs: null | [];
}
