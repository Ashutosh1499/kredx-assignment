import Image from 'next/image';

import kredxLogo from '@/public/assets/icons/kredx-logo.svg';
import instaIcon from '@/public/assets/icons/Icon.svg';
import linkedinLogo from '@/public/assets/icons/linkedin.svg';
import facebookLogo from '@/public/assets/icons/facebook.svg';
import twitterLogo from '@/public/assets/icons/twitter.svg';
import youtubeLogo from '@/public/assets/icons/youtube.svg';

function Footer() {
	return (
		<div id='footer' className='flex items-center justify-between'>
			<Image src={kredxLogo} />
			<div className='grid grid-cols-5 gap-5'>
				<Image src={instaIcon} />
				<Image src={linkedinLogo} />
				<Image src={facebookLogo} />
				<Image src={twitterLogo} />
				<Image src={youtubeLogo} />
			</div>
		</div>
	);
}

export default Footer;
