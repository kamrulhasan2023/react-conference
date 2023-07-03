import {
  IFillButton,
  IFillRedirectButton,
  IOutlineButton,
  IOutlineRedirectButton,
} from './interface';

export const buttonProps: IFillButton = {
  label: 'Button',
  colorScheme: 'bg-primary-text-white',
  hoverColorScheme: 'bg-success-text-white',
  size: 'lg',
  clickHandler: () => {},
  variant: 'fill',
};

export const redirectButtonProps: IFillRedirectButton = {
  href: 'https://www.google.com/',
  isOpenNewTab: true,
  label: 'Redirect Button',
  colorScheme: 'bg-primary-text-white',
  hoverColorScheme: 'bg-success-text-white',
  size: 'lg',
  variant: 'fill',
};

export const outlineButtonProps: IOutlineButton = {
  label: 'Outline Button',
  colorScheme: 'bg-transparent-text-primary',
  hoverColorScheme: 'bg-transparent-text-success',
  size: 'lg',
  clickHandler: () => {},
  variant: 'outline',
};

export const redirectOutlineButtonProps: IOutlineRedirectButton = {
  href: 'https://www.google.com/',
  isOpenNewTab: true,
  label: 'Outline Redirect Button',
  colorScheme: 'bg-transparent-text-primary',
  hoverColorScheme: 'bg-transparent-text-success',
  size: 'lg',
  variant: 'outline',
};
