import { getILink } from 'src/builder/sections/utils/get-ILink';
import { ISanityOptionalLink } from 'src/backend/queries/link/interface';
import { ILabelLink } from 'src/components/custom-link/interface';

/**
 * This function is used to extract optional links
 * @param link
 * @returns
 */
export function getOptionalLink(
  link: ISanityOptionalLink | undefined | null
): ILabelLink | undefined {
  if (link && link.hasLink && !link.isDisabled && link.label) {
    return getILink(link);
  }
}
