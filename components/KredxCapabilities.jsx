import { capabilitiesData } from '@/utils/dataFetching';
import Capability from './Capability';

async function KredxCapabilities() {
	const data = await capabilitiesData();
	return (
		<section
			id='capabilitiesSection'
			className='flex items-center justify-center flex-col'>
			<h2 className='col-span-full heading'>
				KredX AP Automation Capabilities
			</h2>
			<div id='capabilitiesGrid' className='w-full grid text-center gap-5'>
				{data !== null
					? data.map(cap => {
							return <Capability key={cap.id} capability={cap} />;
					  })
					: 'Data fetching'}
				<div className='col-span-full'>
					<button className='largeButton'>Request Demo</button>
				</div>
			</div>
		</section>
	);
}

export default KredxCapabilities;
