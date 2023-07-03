import clsx from 'clsx';
import { ISectionHeading } from './interface';
import Styles from './index.module.scss';
import CustomPortableText from '@components/custom-portable-text';

/**
 * @param {object} ISectionHeading
 * @returns JSX.Element
 */
export default function SectionHeading({
  subtitle,
  title,
  description,
  isCenter,
  colorScheme,
  hasBottomSpacing,
}: ISectionHeading) {
  const sectionHeadingClasses = clsx(
    { 'text-center': isCenter },
    { 'mb-8 md:mb-12': hasBottomSpacing },
    [Styles['section-heading']],
    [Styles[colorScheme]]
  );
  const portabletextColorScheme: boolean =
    colorScheme === 'black' ? false : true;

  return (
    <div role="presentation" className={sectionHeadingClasses}>
      {subtitle && (
        <span
          className={clsx('mb-2 block text-lg font-medium md:text-xl', [
            Styles['sub-title'],
          ])}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={clsx('text-2xl font-medium  md:text-4xl md:font-bold', [
          Styles['title'],
        ])}
      >
        {title}
      </h2>
      {description && (
        <div className="mt-4 lg:mt-8">
          <CustomPortableText
            content={description}
            isDefaultBg={portabletextColorScheme}
          />
        </div>
      )}
    </div>
  );
}
