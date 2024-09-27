import React, { useState, useEffect } from 'react';

const BackToTop = () => {
	const [visible, setVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<button className={`back-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
			Back to top
		</button>
	);
};

export default BackToTop;
