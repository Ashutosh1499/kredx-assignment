import Image from 'next/image';
import arrowIcon from '@/public/assets/icons/arrow-circle-2.svg';
import DisplayResources from './client/DisplayResources';
import { client } from './lib/sanityClient';

async function getResources() {
	const resourcesQuery = `
    *[_type == 'resources'] | order(resourceDate asc) {
        resourceTitle,
          resourceDate,
          resourceTitleImage
      }`;

	const data = await client.fetch(resourcesQuery);
	return data;
}

async function KredxResources() {
	const data = await getResources();
	return (
		<section
			id='resourceSection'
			className='flex flex-col justify-center items-center'>
			<h2 className='w-full heading text-center'>Resources</h2>
			<div className='w-full flex items-center justify-end mb-5 cursor-pointer'>
				<h3 className='text-2xl'>See All Resources</h3>
				<Image src={arrowIcon} className='ml-3' alt='' />
			</div>
			<DisplayResources resourceData={data} />
		</section>
	);
}

export default KredxResources;
