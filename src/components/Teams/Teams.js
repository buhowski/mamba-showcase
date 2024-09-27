import { Button } from '../StructureElements';

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';

import './Teams.scss';

const teamsData = [
	{
		img: img2,
		title: 'Account managers with SEO experience',
		desc: 'All account managers are well versed in all SEO items. No more working alongside teams where SEO account managers can’t answer you promptly and directly.',
	},
	{
		img: img3,
		title: 'World’s leading SEO engineers',
		desc: 'We’re constantly looking to recruit the world’s best SEO engineers to join our team. For you, that means a breadth of experience at your disposal.',
		mod: 'team--width',
	},
	{
		img: img1,
		title: 'Content writers experienced in your industry',
		desc: 'We use absolutely no AI tools to write our content. Why? Because AI tools can’t apply the level of research and rigor our writers use to write content that ranks at #1.',
	},
];

const Teams = () => {
	return (
		<section className='teams' id='academy'>
			<div className='container'>
				<div className='teams-info'>
					<h2 className='teams-info__title h2'>
						Executed by a fully in-house team designed to enhance yours.
					</h2>

					<Button
						buttonClass='teams-info__btn main-btn--secondary'
						title='Get started'
					/>
				</div>

				<div className='team-items'>
					{teamsData.map(({ img, title, desc, mod }, index) => (
						<a href='/#teams' className={`team ${mod}`} key={index}>
							<div className='team__img'>
								<img src={img} alt={title} />
							</div>

							<h4 className='team__title'>{title}</h4>

							<p className='team__desc'>{desc}</p>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Teams;
