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
		<div className={`scroll-top ${visible ? 'visible' : ''}`}>
			<div className='container'>
				<button onClick={scrollToTop}>Back to top</button>
			</div>
		</div>
	);
};

export default BackToTop;
