import './App.scss';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<main className='page'>
			<Header />
			<Hero />

			<Footer />
		</main>
	);
};

export default App;
