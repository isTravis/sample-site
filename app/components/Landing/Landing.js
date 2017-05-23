import React from 'react';
import { Link } from 'react-router-dom';

const Landing = function() {
	const people = [
		{
			name: 'Travis Rich',
			label: 'person/inventor',
		},
		{
			name: 'Thariq Shihipar',
			label: 'person/scientist',
		},
		{
			name: 'Kevin Esvelt',
			label: 'person/pilot',
		},
		{
			name: 'Joichi Ito',
			label: 'person/soldier',
		},
		{
			name: 'Andrew Lippman',
			label: 'person/soldier',
		},
	];

	const articles = [
		{
			name: 'Design and Science',
			label: 'publication/article',
		},
		{
			name: 'Evolutionary dynamics of CRISPR gene drives',
			label: 'publication/article',
		},
		{
			name: 'Guidelines for Precision Ecology',
			label: 'publication/article',
		},
		{
			name: 'Broadercasting II',
			label: 'publication/article',
		},
		{
			name: 'Internacionalización de la Ciudad de México',
			label: 'publication/article',
		},
	];

	const journals = [
		{
			name: 'The Natural History Observer',
			label: 'publication/journal',
		},
		{
			name: 'Responsive Science',
			label: 'publication/journal',
		},
		{
			name: 'CDMX Global',
			label: 'publication/journal',
		},
		{
			name: 'Impacts of Engineering',
			label: 'publication/journal',
		},
		{
			name: 'Art the Science',
			label: 'publication/journal',
		},
	];
	return (
		<div className={'landing-page'}>

			<div className={'background-wrapper'}>
				<div className={'background-shader'} />
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-12'}>
							<h1>The Open Known</h1>
							<p className={'description'}>A project to collect, share, and analyze the breadth of scientific knowledge.</p>
						</div>
					</div>
				</div>
			</div>

			<div className={'container negative-top'}>
				<div className={'row'}>
					<div className={'col-4'}>
						<div className={'title gradient-red'}>
							<h2>People</h2>
							<p className={'ellipsis'}>123,220 entries</p>
						</div>
						{people.map((person)=> {
							return (
								<Link className={'item'} to={`/person/${person.name}`} key={`person-${person.name}`}>
									<div className={'item-name ellipsis'}>{person.name}</div>
									<div className={'item-label ellipsis'}>{person.label}</div>
								</Link>
							);
						})}
					</div>

					<div className={'col-4'}>
						<div className={'title gradient-blue'}>
							<h2>Articles</h2>
							<p className={'ellipsis'}>24,220 entries</p>
						</div>
						{articles.map((article)=> {
							return (
								<Link className={'item'} to={`/pub/${article.name}`} key={`article-${article.name}`}>
									<div className={'item-name ellipsis'}>{article.name}</div>
									<div className={'item-label ellipsis'}>{article.label}</div>
								</Link>
							);
						})}
					</div>

					<div className={'col-4'}>
						<div className={'title gradient-purple'}>
							<h2>Journals</h2>
							<p className={'ellipsis'}>398 entries</p>
						</div>
						{journals.map((journal)=> {
							return (
								<Link className={'item'} to={`/journal/${journal.name}`} key={`journal-${journal.name}`}>
									<div className={'item-name ellipsis'}>{journal.name}</div>
									<div className={'item-label ellipsis'}>{journal.label}</div>
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
