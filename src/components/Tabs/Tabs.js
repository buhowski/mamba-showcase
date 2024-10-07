import React, { useState, useEffect, useRef } from 'react';
import line from './line.png';
import logo from './logo.png';
import './Tabs.scss';

// Sample tab data
const tabData = [
	{
		id: 1,
		videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
		title: 'Mamba is the best thing since sliced bread',
		description: [
			'Lorem ipsum dolor sit amet consectetur. Quis scelerisque elementum et porttitor. Ut duis iaculis facilisi cursus. Pellentesque hendrerit dictum lectus enim lorem.',

			'Lorem ipsum dolor sit amet consectetur. Quis scelerisque elementum et porttitor. Ut duis iaculis facilisi cursus.',
		],
	},
	{
		id: 2,
		videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
		title: 'Lorem, ipsum dolor. 2',
		description: [
			'Lorem ipsum dolor sit amet consectetur. Quis scelerisque elementum et porttitor. Ut duis iaculis facilisi cursus. Pellentesque hendrerit dictum lectus enim lorem.',
		],
	},
	{
		id: 3,
		videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
		title: 'Lorem, 3',
		description: [
			'Lorem ipsum dolor sit amet consectetur. Quis scelerisque elementum et porttitor. Ut duis iaculis facilisi cursus. Pellentesque hendrerit dictum lectus enim lorem.',

			'Lorem ipsum dolor sit amet consectetur. Quis scelerisque elementum et porttitor. Ut duis iaculis facilisi cursus.',
		],
	},
];

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(1);
	const [isPlaying, setIsPlaying] = useState(false);
	const tabButtonsRef = useRef(null);
	const contentHeight = useRef();
	const videoRefs = useRef([]);

	useEffect(() => {
		const heightEl = tabButtonsRef.current.clientHeight;
		document.documentElement.style.setProperty('--tab-buttons-height', `${heightEl}px`);

		const sectionHeight = heightEl + contentHeight.current.clientHeight + 40;

		document.documentElement.style.setProperty(
			'--section-height',
			`${sectionHeight}px`
		);
	}, []);

	const handleTabClick = (tabId) => {
		setActiveTab(tabId);
		videoRefs.current.forEach((video) => {
			if (video && !video.paused) {
				video.pause();
			}
		});
		setIsPlaying(false);
	};

	const renderTabContent = (tab) => (
		<div
			className={`tab-content ${activeTab === tab.id ? 'active' : ''}`}
			ref={contentHeight}
		>
			<div className='tabs-left'>
				<div className='tab-info'>
					<img src={line} alt='Divider line' />
					<div className='tab-info__top'>
						<img src={logo} alt='Logo' />
						<h2>{tab.title}</h2>
						<p>Sebastijan Ribic</p>
					</div>
					<div className='tab-info_bottom'>
						<div className='tab-info_bottom-left'>
							<p className='number'>120+</p>
							<p>Lorem ipsum dolor sit amet consectetur.</p>
						</div>
						<div className='tab-info_bottom-right'>
							{tab.description.map((item, index) => (
								<p key={index}>{item}</p>
							))}
							<button className='header-link'>Read more</button>
						</div>
					</div>
				</div>
			</div>

			<VideoPlayer
				videoSrc={tab.videoSrc}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				ref={(el) => (videoRefs.current[tab.id] = el)}
			/>
		</div>
	);

	return (
		<div className='container'>
			<section className='tabs' id='tabs'>
				<div className='tabs-top'>
					<div className='tabs-left'>
						<h3>100+</h3>
						<p>Proven results with 100+ organizations just like yours.</p>
					</div>

					<div className='tabs-right'>
						<p>
							Our proudest metric is the longevity of our collabs. We aim to be your
							partner for the long haul and were willing to make some pretty unique
							commitments to back it up.
						</p>
					</div>
				</div>

				<div className='tabs-container'>
					<div className='tabs-action'>
						<div className='tab-buttons' ref={tabButtonsRef}>
							{tabData.map((tab) => (
								<button
									key={tab.id}
									className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
									onClick={() => handleTabClick(tab.id)}
								>
									{tab.id}
								</button>
							))}
						</div>
					</div>

					<div className='tabs-wrapper'>{tabData.map(renderTabContent)}</div>
				</div>
			</section>
		</div>
	);
};

const VideoPlayer = React.forwardRef(({ videoSrc, isPlaying, setIsPlaying }, ref) => {
	const videoRef = useRef(null);
	const playButtonRef = useRef(null);
	const [progress, setProgress] = useState(0);

	const handlePlayPause = () => {
		const video = videoRef.current;

		if (isPlaying) {
			video.pause();
		} else {
			video.play();
		}

		setIsPlaying((prev) => !prev);
	};

	const updateProgress = () => {
		const video = videoRef.current;
		const progressPercent = (video.currentTime / video.duration) * 100;

		setProgress(progressPercent);

		if (video.currentTime === video.duration) {
			setIsPlaying(false);
		}
	};

	const handleMouseMove = (e) => {
		const video = videoRef.current;
		const rect = video.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		playButtonRef.current.style.left = `${x}px`;
		playButtonRef.current.style.top = `${y}px`;
	};

	useEffect(() => {
		const video = videoRef.current;
		video.addEventListener('timeupdate', updateProgress);

		return () => {
			video.removeEventListener('timeupdate', updateProgress);
		}; // eslint-disable-next-line
	}, []);

	return (
		<div
			className='video-container'
			onClick={handlePlayPause}
			onMouseMove={handleMouseMove}
		>
			<video
				ref={(el) => {
					videoRef.current = el;
					ref(el);
				}}
				preload='auto'
				className='video'
				src={videoSrc}
			/>

			<div className='progress-bar' style={{ width: `${progress}%` }}></div>

			<div className={`play-button ${isPlaying ? 'pause' : ''}`} ref={playButtonRef}>
				<span className='border'></span>

				<span className='text'>{isPlaying ? 'Pause' : 'Play'}</span>
			</div>
		</div>
	);
});

export default Tabs;
