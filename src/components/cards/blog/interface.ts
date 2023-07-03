import { IDimension } from 'src/components/custom-image/interface';

export interface IBlogCard {
  href: string;
  image: {
    src: string;
    alt: string;
    lqip: string;
  };
  title: string;
  description: string;
  tags: {
    bgColor: { hex: string };
    fontColor: { hex: string };
    title: string;
  }[];
  isFeatured: boolean;
}

export const BLOG_IMAGE_DIMENSION: IDimension = {
  width: 960,
  height: 720,
};
