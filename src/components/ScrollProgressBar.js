import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
	const [scrollProgress, setScrollProgress] = useState(0);

	const handleScroll = () => {
		const scrollTop = window.scrollY;
		const docHeight = document.documentElement.scrollHeight - window.innerHeight;
		const scrollPercent = (scrollTop / docHeight) * 100;
		setScrollProgress(scrollPercent);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='scrollProgressBar-container'>
			<div
				className='scroll-progress-bar'
				style={{ width: `${scrollProgress}%` }}
			></div>

			<div className='scrollProgressBar-container__fade'></div>
		</div>
	);
};

export default ScrollProgressBar;
