import Image from 'next/image';

import { capabilitiesData } from '@/utils/dataFetching';

async function KredxCapabilities() {
	const data = await capabilitiesData();
	return (
		<>
			<section
				id='capabilitiesSection'
				className='flex items-center justify-center flex-col'>
				<h2 className='col-span-full heading'>
					KredX AP Automation Capabilities
				</h2>
				<div id='capabilitiesGrid' className='w-full grid text-center gap-5'>
					{data !== null
						? data.map(cap => {
								return (
									<div
										key={cap.id}
										className='flex flex-col items-center justify-start'>
										<div className='flex items-center justify-center'>
											<Image
												src={`${cap.imageURL}`}
												alt=''
												width={100}
												height={120}
											/>
										</div>
										<div id='eachName'>
											<h3>{cap.cName}</h3>
										</div>
										<span>{cap.content}</span>
									</div>
								);
						  })
						: ''}
					<div className='col-span-full'>
						<button className='largeButton'>Request Demo</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default KredxCapabilities;
