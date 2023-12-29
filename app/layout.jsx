import '@/styles/global.css';
import '@/styles/selectors.css';

import favIcon from '@/public/assets/icons/kredxFavicon.svg';

export const metadata = {
	title: 'KredX Assignment',
	description: 'testing again',
};

const Rootlayout = ({ children }) => {
	return (
		<html lang='en'>
			<head>
				<link rel='shortcut icon' type='image/x-icon' src={favIcon.src} />
			</head>
			<body>
				<div className='main'></div>
				<main className='app'>{children}</main>
			</body>
		</html>
	);
};

export default Rootlayout;
