import Image from 'next/image';

import kredxLogo from '@/public/assets/icons/kredx-logo.svg';
import instaIcon from '@/public/assets/icons/Icon.svg';
import linkedinLogo from '@/public/assets/icons/linkedin.svg';
import facebookLogo from '@/public/assets/icons/facebook.svg';
import twitterLogo from '@/public/assets/icons/twitter.svg';
import youtubeLogo from '@/public/assets/icons/youtube.svg';

function Footer() {
	return (
		<div id='footer' className='w-full flex items-center justify-between'>
			<Image alt='' src={kredxLogo} />
			<div className='grid grid-cols-5 gap-5'>
				<Image alt='' src={instaIcon} />
				<Image alt='' src={linkedinLogo} />
				<Image alt='' src={facebookLogo} />
				<Image alt='' src={twitterLogo} />
				<Image alt='' src={youtubeLogo} />
			</div>
		</div>
	);
}

export default Footer;
