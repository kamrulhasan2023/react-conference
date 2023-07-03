interface ISanityCrop {
  bottom: number;
  left: number;
  right: number;
  top: number;
}

interface ISanityHotspot {
  height: number;
  width: number;
  x: number;
  y: number;
}

export interface ISanityCustomImageWithAsset {
  asset: {
    url: string;
    metadata: {
      dimensions: {
        height: number;
        width: number;
        aspectRatio: number;
      };
      lqip: string;
    };
  };
  crop: ISanityCrop | null;
  hotspot: ISanityHotspot | null;
}

export interface ISanityCustomImage {
  _type: 'customImageSchema';
  _key: string;
  imageFile: ISanityCustomImageWithAsset;
  altDescription: string;
  markDefs?: null | [];
}

export interface ISanityCustomVideo extends Omit<ISanityCustomImage, '_type'> {
  _type: 'customVideoSchema';
  videoUrl: string;
  markDefs?: null | [];
}
