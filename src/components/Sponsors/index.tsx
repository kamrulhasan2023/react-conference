import React from 'react';
import { ISponsors } from './interface';
import Sponsor from '@components/sponsor';

const Sponsors = ({title, sponsors}:ISponsors) => {
	return (
		<div className='w-full bg-[#F9FAFB] py-14 lg:py-[100px]'>
			<h2 className='lg:text-[48px] text-[20px] font-bold text-center text-[#0A142F] lg:mb-8 mb-6'>{title}</h2>
			{
				sponsors.map((sponsor,idx) => <Sponsor key={idx} {...sponsor} />)
			}
		</div>
	);
};

export default Sponsors;