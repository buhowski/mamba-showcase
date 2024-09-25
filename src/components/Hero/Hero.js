import lineImg from '../../assets/media/images/line.png';
import noiseImg from '../../assets/media/images/noise.jpeg';

import './Hero.scss';

const Hero = () => {
	return (
		<section className='hero'>
			<img className='hero-line' src={lineImg} alt='noise' />

			<img className='noise-bg' src={noiseImg} alt='noise' />

			<div className=''></div>
		</section>
	);
};

export default Hero;
