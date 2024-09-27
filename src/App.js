import './App.scss';

import ScrollProgressBar from './components/ScrollProgressBar';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Labels from './components/Labels/Labels';
import Teams from './components/Teams/Teams';

import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<main className='page'>
			<ScrollProgressBar />

			<Header />
			<Hero />
			<Labels />
			<Teams />

			<Footer />
		</main>
	);
};

export default App;
