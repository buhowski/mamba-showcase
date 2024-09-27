import React, { useState, useEffect } from 'react';
import { useMobileQuery } from '../../hooks/useMediaQuery';

import './Header.scss';
import { headerLogo, CloseMenuIcon, MobileMenuIcon } from '../../assets/SvgIcons';
import subItemPho from '../../assets/media/images/submenu-item-photo.jpg';

const MenuItem = ({ title, submenu, activeMenu, setActiveMenu, identifier }) => {
	const handleMouseEnter = () => {
		if (submenu) setActiveMenu(identifier);
	};

	const handleMouseLeave = () => {
		if (submenu) setActiveMenu(null);
	};

	return (
		<li
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={activeMenu === identifier ? 'active' : ''}
		>
			<a href={`#${title.toLowerCase()}`} className={submenu ? 'nav-submenu' : ''}>
				{title}
			</a>

			{submenu && (
				<ul className='submenu container'>
					<li className='submenu__title'>{title}</li>

					{/* Mapping over multiple submenu items */}
					{submenu.map((item, index) => (
						<li key={index} className='submenu-item'>
							<a href='/#'>
								<span className='submenu-item__preview'>
									{item.img ? (
										<img src={item.img} alt={item.title} />
									) : (
										<span>
											{item.title} - <span> Hero section preview</span>
										</span>
									)}
								</span>

								<span className='submenu-item__title'>{item.title}</span>
							</a>
						</li>
					))}
				</ul>
			)}
		</li>
	);
};

const menuItems = [
	{ title: 'Academy' },
	{ title: 'Collaborate' },
	{
		title: 'About',
		submenu: [{ title: 'About', img: subItemPho }, { title: 'Contact' }],
		identifier: 'about',
	},
	{
		title: 'Industries',
		identifier: 'industries',
		submenu: [
			{ title: 'Real estate SEO' },
			{ title: 'E-commerce SEO' },
			{ title: 'Web3 SEO' },
		],
	},
];

const Header = () => {
	const isMobile = useMobileQuery();
	const [activeMenu, setActiveMenu] = useState(null);
	const [scrolled, setScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY; // Get the current scroll position
			setScrolled(offset > 100); // Update scrolled state
		};

		window.addEventListener('scroll', handleScroll);

		// Clean up event listener on component unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		// Cleanup function to reset the overflow when the component unmounts
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	return (
		<header
			className={`header ${scrolled && !activeMenu ? 'header--scrolled' : ''} ${
				isMenuOpen ? 'menuOpen' : ''
			}`}
		>
			<div className='container'>
				<div className='header-content'>
					<a href='/' className='header-logo'>
						{headerLogo}
					</a>

					<nav className='header-nav'>
						<ul>
							{menuItems.map((item, index) => (
								<MenuItem
									key={index}
									title={item.title}
									submenu={item.submenu}
									activeMenu={activeMenu}
									setActiveMenu={setActiveMenu}
									identifier={item.identifier || item.title.toLowerCase()}
								/>
							))}

							<li>
								{isMobile && (
									<a href='#get-started' className='header-link'>
										Get Started
									</a>
								)}
							</li>
						</ul>
					</nav>

					{isMobile && (
						<>
							<span className='bg-menu'></span>

							<button
								type='button'
								className={`mob-btn ${isMenuOpen ? 'menuOpen' : ''}`}
								onClick={toggleMenu}
							>
								{isMenuOpen ? CloseMenuIcon : MobileMenuIcon}
							</button>
						</>
					)}

					{!isMobile && (
						<a href='#get-started' className='header-link'>
							Get Started
						</a>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
