import React from 'react';
import Subscribe from './Subscribe';

import footerLogo from '../../assets/media/images/footer-logo.png';

import './Footer.scss';

const footerNavData = [
	{
		heading: 'Main links',
		links: [
			{ text: 'ACADEMY', url: '#' },
			{ text: 'COLLABORATE', url: '#' },
		],
	},

	{
		heading: 'About',
		links: [
			{ text: 'About', url: '#' },
			{ text: 'Contacts', url: '#' },
		],
	},

	{
		heading: 'Industries',
		links: [
			{ text: 'Real estate SEO', url: '#' },
			{ text: 'E-commerce SEO', url: '#' },
			{ text: 'Web3 SEO', url: '#' },
		],
	},

	{
		heading: 'Socials',
		links: [
			{ text: 'Lorem ipsum', url: '#' },
			{ text: 'dolor sit', url: '#' },
			{ text: 'ipsum dolor', url: '#' },
			{ text: 'sit amet', url: '#' },
			{ text: 'Lorem ipsum', url: '#' },
			{ text: 'dolor sit', url: '#' },
			{ text: 'ipsum dolor', url: '#' },
			{ text: 'sit amet', url: '#' },
		],
	},
];

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-top'>
					<div className='footer-subscribe'>
						<h3 className='footer-subscribe__title h3'>Sign up for email updates</h3>

						<Subscribe />
					</div>

					<div className='footer-nav'>
						{footerNavData.map(({ heading, links }, index) => (
							<div className='footer-nav__block' key={index}>
								<h3 className='footer-nav__title'>{heading}</h3>

								<ul className='footer-nav__list'>
									{links.map((link, index) => (
										<li key={index}>
											<a href={link.url}>{link.text}</a>
										</li>
									))}
								</ul>
							</div>
						))}

						<button className='scroll-top' onClick={scrollToTop}>
							Back to top
						</button>
					</div>
				</div>

				<div className='footer-logo'>
					<img src={footerLogo} alt='logo' />
				</div>

				<div className='footer-copy'>
					<p>
						<a href='#0'>Privacy policy</a>
						<a href='#0'>Terms of conditions</a>
					</p>

					<p className='footer-copy__text'>
						&copy;2024 Mamba Agency. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
