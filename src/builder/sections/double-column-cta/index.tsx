import DoubleColumnCtaSection from '@sections/double-column-cta';
import { ISanityDoubleColumnCTASection } from './query/interface';
import { IDoubleColumnCtaSection } from '@sections/double-column-cta/interface';
import { getOptionalLink } from '../utils/get-optional-link';
import { extractCommonSectionFields } from '../utils/extract-common-section-fields';

interface Props {
  data: ISanityDoubleColumnCTASection;
}

export default function DoubleColumnCTABuilder({ data }: Props) {
  const doubleColumnCtaSectionProps: IDoubleColumnCtaSection = {
    sectionHeading: extractCommonSectionFields(data),
    rightContent: data.content,
    ctaButton: getOptionalLink(data.optionalLink),
  };

  return <DoubleColumnCtaSection {...doubleColumnCtaSectionProps} />;
}
