import { PortableText } from '@portabletext/react';
import clsx from 'clsx';
import { CustomComponents } from './config';
import { ICustomPortableText } from './interface';
import Styles from './custom-portable-text.module.scss';

/**
 * This element renders portable text according to custom
 * blocks and schemas used in sanity's portable text.
 * @param {object}  ICustomPortableText
 * @returns JSX.Element
 */
export default function CustomPortableText({
  content,
  isDefaultBg = true,
  normalBlockFontSize = 'normal',
}: ICustomPortableText) {
  const parentWrapperClasses = clsx(
    {
      [Styles['colored-bg']]: !isDefaultBg,
    },
    /**
     * This style is not applied conditionally as having an unused classname does not
     * effect functionality.
     * Keeping it this way will make it easier to add more sizes in the future.
     */
    [Styles[`normal-block-font-size-${normalBlockFontSize}`]]
  );
  const wrapperClasses = clsx('space-y-4', [Styles['main-wrapper']]);
  return (
    <article className={parentWrapperClasses}>
      <div className={wrapperClasses}>
        <PortableText value={content} components={CustomComponents} />
      </div>
    </article>
  );
}
