import { client } from 'src/backend/client';
import {
  IGeneratedImage,
  IGeneratedImageFitHeight,
  IGeneratedImageFitWidth,
} from './interface';
import imageUrlBuilder from '@sanity/image-url';
import { ISanityCustomImage } from '../queries/media/interface';
import { cache } from 'react';

/**
 * This is a sanity package to fetch sanity images.
 *
 * It is difficult to fetch a sanity image while respecting the crop
 * and hotspot settings using custom code.
 *
 * So until we can come up with a custom solution, I think we should use this instead.
 */
const builder = imageUrlBuilder(client);

/**
 * This function will generate an image url and lqip for a sanity image with
 * specified width.
 * It will maintain the hotspot and crop set by the editor in sanity.
 * It will also return the height and aspectRatio the image should be rended to maintain aspect
 * ratio.
 * @param source
 * @param width
 * @returns src, lqip, height, aspectRatio
 */
export const generateImageUrlWithFitWidth = cache(
  (source: ISanityCustomImage, width: number): IGeneratedImageFitWidth => {
    return {
      alt: source.altDescription,
      src: builder
        .image(source.imageFile)
        .auto('format')
        .fit('max')
        .width(width)
        .url(),
      lqip: source.imageFile.asset.metadata.lqip,
      height: width / source.imageFile.asset.metadata.dimensions.aspectRatio,
      aspectRatio: source.imageFile.asset.metadata.dimensions.aspectRatio,
    };
  }
);

/**
 * This function will generate an image url and lqip for a sanity image with
 * the specified height.
 * It will maintain the hotspot and crop set by the editor in sanity.
 * It will also return the width and aspectRatio the image should be rended to maintain aspect
 * ratio.
 * @param source
 * @param height
 * @returns src, lqip, width, aspectRatio
 */
export const generateImageUrlWithFitHeight = cache(
  (source: ISanityCustomImage, height: number): IGeneratedImageFitHeight => {
    return {
      alt: source.altDescription,
      src: builder
        .image(source.imageFile)
        .auto('format')
        .fit('max')
        .height(height)
        .url(),
      lqip: source.imageFile.asset.metadata.lqip,
      width: height * source.imageFile.asset.metadata.dimensions.aspectRatio,
      aspectRatio: source.imageFile.asset.metadata.dimensions.aspectRatio,
    };
  }
);
/**
 * This function will generate an image url and lqip for a sanity image with
 * the specified height and width.
 * It will maintain the hotspot and crop set by the editor in sanity.
 * @param source
 * @param width
 * @param height
 * @returns src, lqip
 */
export const generateImageUrlFixedDimensions = cache(
  (
    source: ISanityCustomImage,
    width: number,
    height: number
  ): Omit<IGeneratedImage, 'height' | 'width'> => {
    return {
      alt: source.altDescription,
      src: builder.image(source.imageFile).width(width).height(height).url(),
      lqip: source.imageFile.asset.metadata.lqip,
      aspectRatio: source.imageFile.asset.metadata.dimensions.aspectRatio,
    };
  }
);

/**
 * This function will generate an image url and lqip for a sanity image.
 * This function will maintain hotspot and crop.
 * @param source
 * @returns src, lqip
 */
export const generateImageUrl = cache(
  (source: ISanityCustomImage): IGeneratedImage => {
    return {
      alt: source.altDescription,
      src: builder.image(source.imageFile).url(),
      lqip: source.imageFile.asset.metadata.lqip,
      height: source.imageFile.asset.metadata.dimensions.height,
      width: source.imageFile.asset.metadata.dimensions.width,
      aspectRatio: source.imageFile.asset.metadata.dimensions.aspectRatio,
    };
  }
);
