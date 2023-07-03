import { ILabelLink } from '@components/custom-link/interface';

export interface ICtaButton extends ILabelLink {
  colorScheme: ColorScheme;
  hoverColorScheme?: ColorScheme;
}

export const ctaButtonColorSchemes = ['primary', 'success'] as const;
type ColorScheme = (typeof ctaButtonColorSchemes)[number];
