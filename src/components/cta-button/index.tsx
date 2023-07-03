import { ICtaButton } from './interface';
import Styles from './cta-button.module.scss';
import clsx from 'clsx';
import CustomLink from '@components/custom-link';

export default function CtaButton({
  href,
  label,
  colorScheme,
  isOpenNewTab,
  hoverColorScheme,
}: ICtaButton) {
  const btnClasses = clsx(
    'relative z-10 overflow-hidden inline-flex items-center justify-center underline transition-colors',
    [Styles['cta-button']],
    [Styles[colorScheme]],
    { [Styles[`hover-${hoverColorScheme}`]]: hoverColorScheme }
  );

  return (
    <CustomLink
      className={btnClasses}
      href={href}
      isOpenNewTab={isOpenNewTab}
      label={label}
    />
  );
}
