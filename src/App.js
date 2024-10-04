import './App.scss';

import ScrollProgressBar from './components/ScrollProgressBar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Labels from './components/Labels/Labels';
import Teams from './components/Teams/Teams';
import Footer from './components/Footer/Footer';
import Tabs from './components/Tabs/Tabs';

// import BackToTop from './components/BackToTop';

const App = () => {
	return (
		<main className='page'>
			<ScrollProgressBar />

			<Header />
			<Hero />
			<Labels />

			<Tabs />

			<Teams />
			<Footer />
			{/* <Form /> */}
			{/* <BackToTop /> */}
		</main>
	);
};

export default App;
