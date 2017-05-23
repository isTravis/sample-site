import React from 'react';
import { Link } from 'react-router-dom';

const Landing = function() {
	const people = [
		{
			name: 'Alan Kay',
			label: 'person/inventor',
		},
		{
			name: 'Stanley Harper',
			label: 'person/scientist',
		},
		{
			name: 'Janett McVulney',
			label: 'person/pilot',
		},
		{
			name: 'Suzanne Craws',
			label: 'person/soldier',
		},
	];

	const articles = [
		{
			name: 'Neoepinephrine on Corticla Things',
			label: 'publication/article',
		},
		{
			name: 'Efficient Hydrolization of Polymer Beads',
			label: 'publication/article',
		},
		{
			name: 'The Unreasonable Effectiveness of Pizza',
			label: 'publication/article',
		},
		{
			name: 'Elementary Statics',
			label: 'publication/article',
		},
	];
	return (
		<div className={'landing-page'}>

			<div className={'background-wrapper'}>
				<div className={'background-shader'} />
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-12'}>
							<h1 className={'title'}>The Open Known</h1>
							<p className={'description'}>A project to collect, share, and analyze the breadth of scientific knowledge.</p>
						</div>
					</div>
				</div>
			</div>

			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-6'}>
						<h1 className={'title'}>Recent People</h1>
						{people.map((person)=> {
							return (
								<Link className={'item'} to={`/entity/${person.name}`} key={`person-${person.name}`}>
									<div className={'item-name ellipsis'}>{person.name}</div>
									<div className={'item-label ellipsis'}>{person.label}</div>
								</Link>
							);
						})}
					</div>
					<div className={'col-6'}>
						<h1 className={'title'}>Recent Articles</h1>
						{articles.map((article)=> {
							return (
								<Link className={'item'} to={`/entity/${article.name}`} key={`article-${article.name}`}>
									<div className={'item-name ellipsis'}>{article.name}</div>
									<div className={'item-label ellipsis'}>{article.label}</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
