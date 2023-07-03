export const mediaFragment = `
    ...,
    imageFile{
      asset->{
        url,
        metadata{
          dimensions{
            aspectRatio,
            height,
            width,
          },
          lqip
        }
      },
      hotspot,
      crop
    }
`;
