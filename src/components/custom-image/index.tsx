'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ICustomFillImage, ICustomImage, DEFAULT_LQIP } from './interface';

/**
 * This is a custom image component. It has the following features:
 * - Uses lqip to render placeholder images, sanity images have lqip so it can passed here.
 * - Renders a fallback image if the src fails to load.
 * @param props ICustomImage
 * @returns
 */
export function CustomImage({
  src,
  alt,
  lqip,
  className,
  priority,
  sizes,
  height,
  width,
}: ICustomImage) {
  const [error, setError] = useState(false);

  return (
    <Image
      className={className}
      height={height || 612}
      width={width || 612}
      src={error ? '/fallback-image.jpg' : src}
      alt={alt}
      placeholder={'blur'}
      blurDataURL={lqip || DEFAULT_LQIP}
      onError={() => {
        setError(true);
      }}
      priority={priority || false}
      sizes={sizes || undefined}
    />
  );
}

/**
 * This is a custom image component. It has the following features:
 * - Renders in layout fill mode.
 * - Uses lqip to render placeholder images, sanity images have lqip so it can passed here.
 * - Renders a fallback image if the src fails to load.
 * @param props ICustomImage
 * @returns
 */
export function CustomFillImage({
  src,
  alt,
  lqip,
  className,
  priority,
  sizes,
}: ICustomFillImage) {
  const [error, setError] = useState(false);

  return (
    <Image
      className={className}
      src={error ? '/fallback-image.jpg' : src}
      alt={alt}
      placeholder={'blur'}
      blurDataURL={lqip ? lqip : DEFAULT_LQIP}
      fill={true}
      onError={() => {
        setError(true);
      }}
      priority={priority || false}
      sizes={sizes || undefined}
    />
  );
}
