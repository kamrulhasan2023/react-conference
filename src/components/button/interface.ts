import React from 'react';
import { IconNames } from './../icons/interface';

export const buttonSizes = ['lg', 'md', 'sm', 'xs'] as const;
type Size = (typeof buttonSizes)[number];

export interface IFillButton {
  label: string;
  colorScheme: ColorScheme;
  size: Size;
  clickHandler: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  hoverColorScheme?: ColorScheme;
  iconName?: IconNames;
  iconIsLeft?: boolean;
  isDisabled?: boolean;
  variant?: 'fill';
  type?: 'button';
}

export interface IFillSubmitButton
  extends Omit<IFillButton, 'clickHandler' | 'type'> {
  type: 'submit';
}

export interface IFillRedirectButton
  extends Omit<IFillButton, 'clickHandler' | 'isDisabled'> {
  href?: string;
  isOpenNewTab: boolean;
}

export interface IOutlineButton
  extends Omit<IFillButton, 'colorScheme' | 'hoverColorScheme' | 'variant'> {
  colorScheme: OutlineColorScheme;
  hoverColorScheme: OutlineColorScheme;
  variant: 'outline';
}

export interface IOutlineSubmitButton
  extends Omit<IOutlineButton, 'clickHandler' | 'type'> {
  type: 'submit';
}

export interface IOutlineRedirectButton
  extends Omit<IOutlineButton, 'clickHandler' | 'isDisabled'> {
  href?: string;
  isOpenNewTab: boolean;
}

export type IBaseButton =
  | Omit<IOutlineButton, 'clickHandler' | 'type'>
  | Omit<IFillButton, 'clickHandler' | 'type'>;

export const buttonColorSchemes = [
  'bg-primary-text-white',
  'bg-success-text-white',
  'bg-black-text-white',
  'bg-white-text-black',
] as const;
type ColorScheme = (typeof buttonColorSchemes)[number];

export const outlineButtonColorSchemes = [
  'bg-transparent-text-primary',
  'bg-transparent-text-success',
] as const;
type OutlineColorScheme = (typeof outlineButtonColorSchemes)[number];
