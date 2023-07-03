export interface IDimension {
  width: number;
  height: number;
}

export interface ICustomFillImage {
  src: string;
  alt: string;
  lqip?: string;
  className?: string;
  priority?: boolean;
  // Defining sizes is very important for optimization.
  // please @see https://nextjs.org/docs/app/api-reference/components/image#sizes
  sizes?: string;
}

export type ICustomImage = ICustomFillImage & IDimension;

export const DEFAULT_LQIP =
  'data:image/webp;base64,UklGRqoCAABXRUJQVlA4WAoAAAAgAAAApQAApQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggvAAAAJAMAJ0BKqYApgA+7XaxVimnJCOgSLkwHYlpbt1fxCsg/IBP1e0Uv6zbh195V1oQ0qg4eMgl9v5lldvwNtcsk7j4QQwDRA1cK4GZWZJqoBywwvsGhWYf0qTZx1ngtlNpr6+bG37cr8T+r89ToAAA/vDfIg4NNQS8amAH8uIwTx3D5NaTosqQbj6ifnwCm+Lq79XByrXyq+LJ8a3J1EqztLRsCGcEzbYgzrhLjw0m2YxHaWtkSUQlc5SwgAAA';
