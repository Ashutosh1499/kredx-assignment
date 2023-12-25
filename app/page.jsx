import AboutText from '@/components/AboutText';
import Footer from '@/components/Footer';
import HomeLandingPage from '@/components/HomeLandingPage';
import KredxAdvantage from '@/components/KredxAdvantage';
import KredxCapabilities from '@/components/KredxCapabilities';

const Home = () => {
	return (
		<>
			<div id='topRectangle'></div>
			<HomeLandingPage />
			<AboutText />
			<KredxCapabilities />
			<KredxAdvantage />
			<Footer />
		</>
	);
};

export default Home;
