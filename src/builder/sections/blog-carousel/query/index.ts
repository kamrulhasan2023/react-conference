import { mediaFragment } from 'src/backend/queries/media';
import groq from 'groq';
import { portableTextFragment } from 'src/backend/queries/portable-text';

export const blogsCarouselFragment = groq`
	_type == "blogsCarousel" => @->{
		_type,
		title,
		subtitle,
		description[]{
			${portableTextFragment}
		},
		"blogs" : *[_type == "blog"] | order(_updatedAt desc){
			image{
				${mediaFragment}
			},
			title,
			tags[]->,
			slug,
			isFeaturedBlog,
			description,
  	}
	}
`;
