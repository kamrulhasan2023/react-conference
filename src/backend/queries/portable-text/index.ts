import { mediaFragment } from '../media';
import { linkFragment } from '../link';

const markDefFragment = `
    markDefs[]{
        ...,
        ${linkFragment}
    }
`;

const internalBlockFragment = `
	_type == 'internalBlock' => @{
		...,
		content[]{
			...,
			${markDefFragment},
		}
	}
`;

export const portableTextFragment = `
    ...,
    ${markDefFragment},
    ${internalBlockFragment},
    _type == "customImageSchema" => @{
        ${mediaFragment}
    },
     _type == "customVideoSchema" => @{
        ${mediaFragment}
    }
`;
