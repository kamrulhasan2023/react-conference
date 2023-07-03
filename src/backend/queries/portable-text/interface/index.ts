import { ISanityBlockquote } from './blockquote';
import { ISanityCustomVideo, ISanityCustomImage } from '../../media/interface';
import { PortableTextBlock } from '@portabletext/types';
import { ISanityCode } from './code';

export type ISanityCustomPortableText = (
  | PortableTextBlock
  | ISanityCustomImage
  | ISanityCustomVideo
  | ISanityBlockquote
  | ISanityCode
)[];
