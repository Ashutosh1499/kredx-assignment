import AboutText from '@/components/AboutText';
import Footer from '@/components/Footer';
import FormSection from '@/components/FormSection';
import HomeLandingPage from '@/components/HomeLandingPage';
import KredxAdvantage from '@/components/KredxAdvantage';
import KredxCapabilities from '@/components/KredxCapabilities';
import KredxResources from '@/components/KredxResources';
import Resources from '@/components/Resources';

const Home = () => {
	return (
		<>
			<div id='topRectangle'></div>
			<HomeLandingPage />
			<AboutText />
			<KredxCapabilities />
			<KredxAdvantage />
			<KredxResources />
			<FormSection />
			<Footer />
		</>
	);
};

export default Home;
