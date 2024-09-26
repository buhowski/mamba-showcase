import { starIcon } from '../../assets/SvgIcons';

import lineImg from './images/line.png';
import google from './images/google.png';
import semrush from './images/semrush.png';
import clutch from './images/clutch.png';

import './Hero.scss';

const partnersData = [
	{
		shapeBg: google,
		title: 'Google partners',
	},
	{
		shapeBg: semrush,
		title: 'certified agency Partner',
	},
	{
		shapeBg: clutch,
		title: '47 Reviews',
		score: '5.0',
	},
];

const Hero = () => {
	return (
		<section className='hero'>
			<img className='hero-line' src={lineImg} alt='noise' />

			<span className='noise-bg' alt='noise'></span>

			<div className='container'>
				<div className='hero-content'>
					<h1 className='hero-title h1'>Your outcome — based SEO partner.</h1>

					<p className='hero-desc'>
						<span>Clear KPIs set every quarter that align with</span> your targets.
						Lorem ipsum dolor it amet consectetur id tempus neque.
					</p>

					<button className='hero-btn main-btn' type='button'>
						<span>get started</span>
					</button>
				</div>

				<div className='hero-partners'>
					{partnersData.map(({ shapeBg, title, score }, index) => (
						<a href='/#' className='partners-block' key={index}>
							{/* Using deferent design layers */}
							{/* <img src={textureBg} alt={title} className='partners-block__texture' /> */}
							{/* <span className='partners-block__shape'>{shapeBg}</span> */}
							{/* <img src={icon} alt={title} className='partners-block__icon' /> */}

							<img src={shapeBg} alt={title} className='partners-block__shape' />

							<span className='partners-block__title'>
								{title}

								{score && (
									<span>
										{starIcon} {score}
									</span>
								)}
							</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
