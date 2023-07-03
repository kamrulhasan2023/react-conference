import { IDoubleColumnCtaSection } from './interface';
import { sectionDescriptionProps } from '@components/section-heading/mock-data';

export const doubleColumnCtaSectionProps: IDoubleColumnCtaSection = {
  sectionHeading: {
    title:
      'We’d love to help start your headless journey or  to help optimize your existing solution.',
  },
  rightContent: sectionDescriptionProps,
  ctaButton: {
    label: 'Book a project discovery call',
    href: 'https://example.com/',
    isOpenNewTab: true,
  },
};
