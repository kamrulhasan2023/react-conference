export interface IGeneratedImage {
  src: string;
  lqip: string;
  height: number;
  width: number;
  aspectRatio: number;
  alt: string;
}

export type IGeneratedImageFitHeight = Omit<IGeneratedImage, 'height'>;

export type IGeneratedImageFitWidth = Omit<IGeneratedImage, 'width'>;
