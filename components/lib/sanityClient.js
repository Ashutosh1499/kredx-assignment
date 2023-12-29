import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
	apiVersion: '2023-05-03',
	dataset: 'production',
	projectId: 'qu8e4b5n',
	useCdn: false,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source) {
	return builder.image(source);
}
