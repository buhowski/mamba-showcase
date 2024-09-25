import { HeroLine } from '../../assets/SvgIcons';
import noiseImg from '../../assets/media/images/noise.png';

import './Hero.scss';

const Hero = () => {
	return (
		<section className='hero'>
			{HeroLine}

			<img className='noise-bg' src={noiseImg} alt='noise' />

			<div className=''></div>
		</section>
	);
};

export default Hero;
