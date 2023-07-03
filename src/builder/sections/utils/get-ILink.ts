import { ILabelLink } from '@components/custom-link/interface';
import {
  ISanityOptionalLink,
  ISanityRequiredLink,
} from 'src/backend/queries/link/interface';
import { extractSanityLinkGlobal } from 'src/utils/extract-sanity-link';

/**
 * This function is used when extracting required links, or when
 * extracting optional links with valid data.
 * @param link
 * @returns
 */
export function getILink(
  link: ISanityOptionalLink | ISanityRequiredLink
): ILabelLink {
  return {
    href: extractSanityLinkGlobal(link),
    isOpenNewTab: link.openNewTab,
    label: link.label,
  };
}
