import React, { useState } from 'react';
import {
	label1,
	label2,
	label3,
	label4,
	label5,
	label6,
	label7,
	label8,
} from '../../assets/SvgIcons';

import './Labels.scss';

const labelsData = [
	{ logo: label1 },
	{ logo: label2 },
	{ logo: label3 },
	{ logo: label4 },
	{ logo: label5 },
	{ logo: label6 },
	{ logo: label7 },
	{ logo: label8 },
];

const Labels = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleMouseEnter = (index) => {
		setActiveIndex(index);
	};

	const handleMouseLeave = () => {
		setActiveIndex(null);
	};

	return (
		<section className='labels'>
			<div className='container'>
				<div className='labels-content'>
					{labelsData.map(({ logo }, index) => (
						<div
							key={index}
							className={`labels-block ${
								activeIndex !== null && activeIndex !== index ? 'hidden' : ''
							}`}
							onMouseEnter={() => handleMouseEnter(index)}
							onMouseLeave={handleMouseLeave}
						>
							{logo}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Labels;
