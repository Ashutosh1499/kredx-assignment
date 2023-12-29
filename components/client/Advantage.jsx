'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import arrowCircle from '@/public/assets/icons/arrow-circle.svg';
import arrowLightIcon from '@/public/assets/icons/arrow-light.svg';
import arrowDarkIcon from '@/public/assets/icons/arrow-dark.svg';

function Advantages({ data }) {
	const [activePoint, setActivePoint] = useState(0);
	const activePointCSS = `active eachAdvantage w-5/6 flex`;
	const inactivePointCSS = `eachAdvantage w-5/6 flex`;
	return (
		<>
			<section
				id='advantageSection'
				className='flex flex-col items-center justify-center'>
				<h2 className='heading'>The KredX CMS Advantage</h2>
				<div
					id='advantageSubSection'
					className='w-full flex items-center justify-between'>
					<div
						id='advantagePoint'
						className='flex w-3/5 h-full flex-col items-start justify-between'>
						{data !== null ? (
							data.map((eachPoint, ind) => {
								return (
									<div
										id='advantageTab'
										className={
											activePoint !== ind ? inactivePointCSS : activePointCSS
										}
										key={ind}
										onClick={() => setActivePoint(ind)}>
										<span
											style={{
												color: activePoint !== ind ? 'black' : 'white',
											}}>
											{eachPoint.advantagePoint}
										</span>
										<Image
											alt=''
											src={activePoint !== ind ? arrowDarkIcon : arrowLightIcon}
											style={{ cursor: 'pointer' }}
										/>
									</div>
								);
							})
						) : (
							<div className='eachAdvantage w-5/6 flex'>
								<span>No Points to show</span>
							</div>
						)}
					</div>
					<div
						id='advantageDescription'
						className='flex w-2/5 h-full flex-col items-center justify-evenly'>
						{data !== null &&
						data[activePoint].advantageDescription.length !== 0 ? (
							data[activePoint].advantageDescription.map((eachDesc, ind) => {
								return (
									<p key={ind} className='flex items-start'>
										<Image alt='' src={arrowCircle} />
										{eachDesc}
									</p>
								);
							})
						) : (
							<p>No Data to Show</p>
						)}
					</div>
				</div>
			</section>
		</>
	);
}

export default Advantages;
