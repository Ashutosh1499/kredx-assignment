import { advantagesData } from '@/utils/dataFetching';

import Advantages from './Advantages';

async function KredxAdvantage() {
	const data = await advantagesData();
	return <Advantages data={data} />;
}

export default KredxAdvantage;
