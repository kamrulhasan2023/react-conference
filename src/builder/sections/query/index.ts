import { blogsCarouselFragment } from '../blog-carousel/query';
import groq from 'groq';
import { doubleColumnCTASectionQuery } from '../double-column-cta/query';

export const pageSectionsQuery = groq`
	${blogsCarouselFragment},
	${doubleColumnCTASectionQuery}
`;
