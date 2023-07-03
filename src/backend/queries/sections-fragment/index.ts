import groq from 'groq';
import { portableTextFragment } from '../portable-text';

export const commonSectionsQueryFragment = groq`
	_type,
	title,
	subtitle,
	description[]{
		${portableTextFragment}
	}
`;
