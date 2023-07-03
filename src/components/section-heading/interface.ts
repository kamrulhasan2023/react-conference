import { ISanityCustomPortableText } from 'src/backend/queries/portable-text/interface';

export const sectionHeadingColorschemes = [
  'primary',
  'success',
  'white',
  'black',
] as const;

type ColorScheme = (typeof sectionHeadingColorschemes)[number];
export interface ISectionHeading {
  title: string;
  colorScheme: ColorScheme;
  isCenter: boolean;
  hasBottomSpacing: boolean;
  subtitle?: string;
  description?: ISanityCustomPortableText;
}
