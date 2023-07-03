import clsx from 'clsx';
import {
  IBaseButton,
  IFillButton,
  IFillRedirectButton,
  IFillSubmitButton,
  IOutlineButton,
  IOutlineRedirectButton,
  IOutlineSubmitButton,
} from './interface';
import IconStore from '@components/icons';
import Styles from './button.module.scss';
import CustomLink from '@components/custom-link';

/**
 * Tailwind Classes
 */
const btnWrapperClasses = clsx(
  `inline-flex focus:outline-none focus-visible:outline-none focus:shadow-none focus-visible:shadow-none`
);

/**
 * @param {object}  IBaseButton
 * @returns JSX.Element
 */
const BaseButton = ({
  label,
  colorScheme,
  size,
  hoverColorScheme,
  iconName,
  iconIsLeft,
  isDisabled,
  variant,
}: IBaseButton) => {
  const btnClasses = clsx(
    'relative z-10 group/button overflow-hidden inline-flex items-center justify-center gap-3 cursor-pointer text-white hover:text-white leading-[1.1]',
    [Styles['button']],
    { [Styles['outline']]: variant === 'outline' },
    [Styles[colorScheme]],
    { [Styles[`hover-${hoverColorScheme}`]]: hoverColorScheme },
    [Styles[size]],
    { 'flex-row-reverse': iconName !== undefined && iconIsLeft },
    { 'pointer-events-none opacity-60': isDisabled }
  );

  const btnBgClasses = clsx(
    'absolute z-[-1] inset-0 invisible opacity-0 group-hover/button:visible group-hover/button:opacity-100',
    [Styles['button-bg']]
  );

  return (
    <span className={btnClasses} aria-label={label}>
      <span>{label}</span>
      {iconName !== undefined && (
        <span className={Styles['button-icon']}>
          <IconStore iconName={iconName} />
        </span>
      )}
      <span className={btnBgClasses}></span>
    </span>
  );
};

// Normal Button
const Button = (
  props: IFillButton | IOutlineButton | IFillSubmitButton | IOutlineSubmitButton
) => {
  const btnWrapperWithNotAllowedClass = clsx(btnWrapperClasses, {
    'cursor-not-allowed': props.isDisabled,
  });
  return (
    <button
      type={props.type || 'button'}
      className={btnWrapperWithNotAllowedClass}
      onClick={(e) => {
        if (props.isDisabled !== true && 'clickHandler' in props) {
          props.clickHandler(e);
        }
      }}
    >
      <BaseButton {...props} />
    </button>
  );
};

// Redirect Button
Button.Redirect = (props: IFillRedirectButton | IOutlineRedirectButton) => {
  if (props.href) {
    return (
      <CustomLink
        href={props.href}
        className={btnWrapperClasses}
        isOpenNewTab={props.isOpenNewTab}
      >
        <BaseButton {...props} />
      </CustomLink>
    );
  }

  return (
    <button disabled={true} className={btnWrapperClasses}>
      <BaseButton {...props} isDisabled={true} />
    </button>
  );
};

export default Button;
