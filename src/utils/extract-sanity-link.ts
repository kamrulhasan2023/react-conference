import {
  ISanityOptionalLink,
  ISanityRequiredLink,
  SanityLinkTypeEnum,
} from 'src/backend/queries/link/interface';

export function extractSanityLinkGlobal(
  link: ISanityOptionalLink | ISanityRequiredLink
): string {
  if (link.linkType == SanityLinkTypeEnum.Internal) {
    return link.internalLink.slug.current;
  } else {
    return link.href;
  }
}
