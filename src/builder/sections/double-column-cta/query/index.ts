import { linkFragment } from 'src/backend/queries/link';
import { portableTextFragment } from 'src/backend/queries/portable-text';
import { commonSectionsQueryFragment } from 'src/backend/queries/sections-fragment/index';
import groq from 'groq';

export const doubleColumnCTASectionQuery = groq`
 _type == "doubleColumnCTASection" => @->{
	${commonSectionsQueryFragment},
	content[]{
		${portableTextFragment}
	},
	optionalLink{
		${linkFragment}
	}
 }
`;
