import Image from 'next/image';

import halfXleft from '@/public/assets/icons/halfXleft.svg';
import halfXright from '@/public/assets/icons/halfXright.svg';

function AboutText() {
	return (
		<>
			<div id='aboutText' className='flex items-center justify-center'>
				<Image src={halfXleft} />
				<span>
					{' '}
					Only KredX’s AP Solution lets you automate and streamline your entire
					PO-to-Pay process without messing up your existing processes. That’s
					because we support all native functionality for 40+ ERPs
				</span>
				<Image src={halfXright} />
			</div>
		</>
	);
}

export default AboutText;
