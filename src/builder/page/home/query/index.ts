import groq from 'groq';
import { pageSectionsQuery } from 'src/builder/sections/query/index';
import { linkFragment } from 'src/backend/queries/link';
import { mediaFragment } from 'src/backend/queries/media';
import { commonPageFieldQuery } from 'src/backend/queries/page-fields';

export const homePageQuery = groq`
*[_type == "homePage"][0]{
	${commonPageFieldQuery},
	slug,
	description,
	optionalLink{
		${linkFragment}
	},
	sections[]{
		${pageSectionsQuery}
	},
	"blogs": *[_type == "blog"]{
		title,
		"tags": tags[]->{
			title,
			bgColor{
				hex
			},
			fontColor{
				hex
			}
		},
		description,
		customImageSchema{
			${mediaFragment}
		},
		isFeaturedBlog,
		slug
	}
}
`;
