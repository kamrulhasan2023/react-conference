import { portableTextFragment } from 'src/backend/queries/portable-text';
import groq from 'groq';

export const blogPageQuery = groq`
*[_type == "blog" && slug.current == $slug][0] {
	title,
	description,
	blogContent[]{
		${portableTextFragment}
	}
}
`;

export const allBlogsQuery = groq`
	*[_type == "blog"].slug.current
`;
