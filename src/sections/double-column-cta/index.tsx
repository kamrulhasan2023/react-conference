import Container from '@components/container';
import CtaButton from '@components/cta-button';
import CustomPortableText from '@components/custom-portable-text';
import SectionHeading from '@components/section-heading';
import { IDoubleColumnCtaSection } from './interface';

export default function DoubleColumnCtaSection({
  sectionHeading,
  rightContent,
  ctaButton,
}: IDoubleColumnCtaSection) {
  return (
    <section
      role="presentation"
      className="section-padding-primary bg-primary-thin"
    >
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="w-full md:w-[48%] lg:w-[45%] xl:w-[42%] 2xl:w-[40%]">
            <SectionHeading
              {...sectionHeading}
              colorScheme="black"
              isCenter={false}
              hasBottomSpacing={false}
            />
          </div>
          <div className="w-full md:w-1/2">
            <CustomPortableText content={rightContent} isDefaultBg={false} />
            {!!ctaButton && ctaButton.href && (
              <div className="mt-8 md:mt-9 xl:mt-11 2xl:mt-12">
                <CtaButton {...ctaButton} colorScheme="primary" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
