import { ISanityCommonSectionFields } from 'src/backend/queries/sections-fragment/interface';

export function extractCommonSectionFields<T>(
  data: ISanityCommonSectionFields<T>
) {
  return {
    title: data.title,
    subTitle: data.subtitle,
    description: data.description,
  };
}
