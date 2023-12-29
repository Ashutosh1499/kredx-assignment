'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { urlFor } from '../lib/sanityClient';

import ellipseDark from '@/public/assets/icons/ellipse-dark.svg';
import ellipseLight from '@/public/assets/icons/ellipse-light.svg';

function DisplayResources({ resourceData }) {
	const [windowWidth, setWindowWidth] = useState();
	const [displayCount, setDisplayCount] = useState(0);
	const [startFrom, setStartFrom] = useState(0);
	const [ellipseCount, setEllipseCount] = useState();
	const [activeEllipse, setActiveEllipse] = useState(0);
	const ellipseArray = Array.from(
		{ length: ellipseCount },
		(_, index) => index,
	);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	useEffect(() => {
		if (windowWidth < 680) {
			setDisplayCount(1);
		} else if (windowWidth < 1080) {
			setDisplayCount(2);
		} else {
			setDisplayCount(3);
		}
		console.log(startFrom);
	}, [windowWidth]);
	useEffect(() => {
		setEllipseCount(
			resourceData.length % displayCount === 0
				? resourceData.length / displayCount
				: parseInt(resourceData.length / displayCount) + 1,
		);
	}, [displayCount]);
	return (
		<>
			<div id='resourceSlider' className='w-full grid grid-flow-col gap-5'>
				{resourceData
					.slice(startFrom, startFrom + displayCount)
					.map((resource, index) => {
						return (
							<div className='eachResource flex flex-col' key={index}>
								<div className='resourceImage flex items-center'>
									<Image
										src={urlFor(resource.resourceTitleImage).url()}
										height={210}
										width={380}
										alt=''
									/>
								</div>
								<div className='eachName flex justify-center'>
									<h3 className='mt-5 mb-2'>{resource.resourceTitle}</h3>
								</div>
								<span>{resource.resourceDate}</span>
							</div>
						);
					})}
			</div>
			<div className='ellipses mt-7 flex justify-around'>
				{ellipseArray.map((_, index) => {
					return (
						<Image
							src={index === activeEllipse ? ellipseDark : ellipseLight}
							className='m-2 cursor-pointer'
							onClick={() => {
								setActiveEllipse(index);
								setStartFrom(index * displayCount);
							}}
							key={index}
							alt=''
						/>
					);
				})}
			</div>
		</>
	);
}

export default DisplayResources;
