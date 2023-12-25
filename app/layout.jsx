import '@/styles/global.css';
import '@/styles/selectors.css';

export const metadata = {
	title: 'KredX Assignment',
	description: 'testing again',
};

const Rootlayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<div className='main'></div>
				<main className='app'>{children}</main>
			</body>
		</html>
	);
};

export default Rootlayout;
