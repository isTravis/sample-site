import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { getData } from 'actions/app';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	appData: PropTypes.object.isRequired,
	match: PropTypes.object.isRequired,
};

class Entity extends Component {
	componentWillMount() {
		const match = this.props.match;
		const mode = this.getMode(match);
		this.props.dispatch(getData(`${mode}?title=${match.params.param}`));
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.match.params.param !== nextProps.match.params.param) {
			const match = nextProps.match;
			const mode = this.getMode(match);
			this.props.dispatch(getData(`${mode}?title=${match.params.param}`));
		}
	}

	getMode(match) {
		let mode = 'person';
		if (match.url.indexOf('journal') > -1) { mode = 'journal'; }
		if (match.url.indexOf('pub') > -1) { mode = 'pub'; }
		return mode;
	}

	render() {
		const mode = this.getMode(this.props.match);
		const appData = this.props.appData.appData || {};
		const records = appData.records || [];
		const connections = {};
		records.forEach((record)=> {
			const itemArray = connections[record._fields[record._fieldLookup.link].type] || [];
			const item = {
				type: record._fields[record._fieldLookup.dest].labels[0],
				name: record._fields[record._fieldLookup.dest].properties.title || record._fields[record._fieldLookup.dest].properties.name
			};
			itemArray.push(item);
			connections[record._fields[record._fieldLookup.link].type] = itemArray;
		});
		console.log(connections);
		return (
			<div>
				<Helmet>
					<title>{this.props.match.params.param}</title>
				</Helmet>

				<div className={'container'}>
					<h1>{this.props.match.params.param}</h1>
					<div className={`mode-banner mode-${mode}`}>{mode} · Created June 12, 2016</div>
					<div>
						{Object.keys(connections).map((linkType)=> {
							return (
								<div key={linkType}>
									<h4>{linkType}</h4>
									{connections[linkType].map((link, index)=> {
										return (
											<div key={`${linkType}-${link.name}-${index}`}>
												<Link to={`/${link.type.toLowerCase()}/${link.name}`}>{link.name}</Link>
											</div>
										);
									})}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

Entity.propTypes = propTypes;
export default withRouter(connect(state => ({ appData: state.app }))(Entity));
