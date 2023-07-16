import React from 'react';
import { ISponsor } from './interface';

const Sponsor = ({sponsorType,sponsorsLogo}: ISponsor) => {
	const sponsorTypeLogo = sponsorType === "Gold" ? "🥇" : sponsorType === "Silver" ? "🥈" : "🥉";
	return (
		<div className='px-8'>
			<h5 className='text-center lg:mb-8 mb-4 text-[#667085] font-medium text-[12px] lg:text-base' >
				{sponsorTypeLogo}{sponsorType} Sponsors
			</h5>
			<div className='flex justify-center gap-14 flex-wrap mb-8'>
				{
					sponsorsLogo.map((sponsor,idx) => {
						return  <img key={idx} src={sponsor.logo} alt="logo" />
					} )
				}
			</div>
		</div>
	);
};

export default Sponsor;