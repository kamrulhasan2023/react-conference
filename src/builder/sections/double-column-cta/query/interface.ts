import { ISanityOptionalLink } from 'src/backend/queries/link/interface';
import { ISanityCustomPortableText } from 'src/backend/queries/portable-text/interface';
import { ISanityCommonSectionFields } from 'src/backend/queries/sections-fragment/interface';

export interface ISanityDoubleColumnCTASection
  extends ISanityCommonSectionFields<'doubleColumnCTASection'> {
  content: ISanityCustomPortableText;
  optionalLink?: ISanityOptionalLink;
}
