import groq from 'groq';

export const commonPageFieldQuery = groq`
 metaTitle,
 metaDescription,
 openGraphInfo{
	title,
	description
 }
`;
