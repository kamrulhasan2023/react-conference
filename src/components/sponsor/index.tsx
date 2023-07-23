import React from 'react';
import { ISponsor } from './interface';
import { CustomImage } from '@components/custom-image';
const Sponsor = ({sponsorType,sponsorsLogo}: ISponsor) => {
	const sponsorTypeLogo = sponsorType === "Gold" ? "🥇" : sponsorType === "Silver" ? "🥈" : "🥉";
	return (
		<div className='px-8'>
			<h5 className='text-center lg:mb-8 mb-4 text-[#667085] font-medium text-[12px] lg:text-base' >
				{sponsorTypeLogo}{sponsorType} Sponsors
			</h5>
			<div className='flex justify-center items-center flex-wrap  gap-14  mb-8 '>
				{
					sponsorsLogo.map((sponsor,idx) => {
						return  <div key={idx} className='md:w-auto w-[107px]'>
							{/* <img  src={sponsor.logo} alt="logo"  /> */}
							<CustomImage src={sponsor.logo} alt="logo" width={290} height={65} />
						</div>
					} )
				}
			</div>
		</div>
	);
};

export default Sponsor;