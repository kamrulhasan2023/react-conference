export const tagColors = [
  'bg-danger',
  'bg-danger-light',
  'bg-success',
] as const;
type ITagColor = (typeof tagColors)[number];

export interface ITag {
  label: string;
  color: ITagColor;
}
