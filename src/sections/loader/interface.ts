export const loaderSectionLevels = ['section', 'page'] as const;
type Level = (typeof loaderSectionLevels)[number];

export interface ILoaderSection {
  level: Level;
}
