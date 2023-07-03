import groq from 'groq';

export const entityPageFields = groq`
	title,
	metaTitle,
	metaDescription,
	openGraphInfo{
		title,
		description
	},
	slug
`;
