import Image from 'next/image';
import { client, urlFor } from './lib/sanityClient';

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

async function Resources() {
	const data = await getResources();
	return (
		<>
			<Image
				src={urlFor(data[0].resourceTitleImage).url()}
				alt=''
				width={100}
				height={100}
			/>
		</>
	);
}
export default Resources;
