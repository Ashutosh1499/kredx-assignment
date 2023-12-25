import { advantagesData } from '@/utils/dataFetching';

import Advantage from './Advantage';

async function KredxAdvantage() {
	const data = await advantagesData();
	return <Advantage data={data} />;
}

export default KredxAdvantage;
