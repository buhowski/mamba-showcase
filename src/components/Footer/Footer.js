import React from 'react';
import Subscribe from './Subscribe';

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
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer-top'>
					<div className='footer-subscribe'>
						<h3 className='h3'>Sign up for email updates</h3>

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
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
