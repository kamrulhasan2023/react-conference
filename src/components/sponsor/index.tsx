import React from 'react';
import { ISponsor } from './interface';

const Sponsor = ({sponsorType,sponsorsLogo}: ISponsor) => {
	const sponsorTypeLogo = sponsorType === "Gold" ? "🥇" : sponsorType === "Silver" ? "🥈" : "🥉";
	return (
		<div>
			<h5 className='text-center my-8'>
				{sponsorTypeLogo}{sponsorType} Sponsors
			</h5>
			<div className='flex justify-center gap-14 flex-wrap'>
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