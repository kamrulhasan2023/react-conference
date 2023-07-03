import { ILabelLink } from '@components/custom-link/interface';
import { ISectionHeading } from '@components/section-heading/interface';
import { ISanityCustomPortableText } from 'src/backend/queries/portable-text/interface';

export interface IDoubleColumnCtaSection {
  sectionHeading: Pick<ISectionHeading, 'subtitle' | 'title' | 'description'>;
  rightContent: ISanityCustomPortableText;
  ctaButton?: ILabelLink;
}
