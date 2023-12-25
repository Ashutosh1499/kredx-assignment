import Image from 'next/image';

import kredCMSLogo from '@/public/assets/icons/logo-cms-1.svg';
import homeAvatar from '@/public/assets/icons/home-avatar.svg';
import homeBackground from '@/public/assets/images/home-background.svg';

function HomeLandingPage() {
	return (
		<section
			style={{ backgroundImage: `url(${homeBackground.src})` }}
			id='landingScreen'
			className='w-full h-full grid gap-y-24 gap-x-20'>
			<Image src={kredCMSLogo} id='kredCMSLogo' className='col-span-3' />
			<div
				id='landingScreenLeft'
				className='flex flex-col justify-center row-span-2'>
				<h1>Automate Your Finance Function</h1>
				<br />
				<h2>WITHOUT Reworking Your ERP</h2>
				<br />
				<button>Learn more</button>
			</div>
			<div
				id='landingScreenRight'
				className='flex items-center justify-center col-span-2 row-span-1'>
				<Image src={homeAvatar} />
			</div>
		</section>
	);
}

export default HomeLandingPage;
