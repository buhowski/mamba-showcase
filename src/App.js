import './App.scss';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Labels from './components/Labels/Labels';

import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<main className='page'>
			<Header />
			<Hero />
			<Labels />

			<Footer />
		</main>
	);
};

export default App;
