import { ISanityCustomPortableText } from 'src/backend/queries/portable-text/interface';

export const portableTextNormalBlockFontSizes = ['normal', 'medium'] as const;
type FontSize = (typeof portableTextNormalBlockFontSizes)[number];

export interface ICustomPortableText {
  content: ISanityCustomPortableText;
  isDefaultBg?: boolean;
  /**
   * Cautions: It will only effect paragraph tag (normal block in sanity)
   *          (.normal class name in scss file)
   */
  normalBlockFontSize?: FontSize;
}
