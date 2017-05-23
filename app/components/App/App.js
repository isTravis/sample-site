import React from 'react';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
import Async from 'react-code-splitting';
import Nav from 'components/Nav/Nav';

require('./app.scss');

const Landing = () => <Async load={import('components/Landing/Landing')} />;
const Entity = () => <Async load={import('components/Entity/Entity')} />;
const NoMatch = () => <Async load={import('components/NoMatch/NoMatch')} />;

const App = function() {
	return (
		<div>
			<Helmet>
				<title>React Starter 17</title>
				<meta name="description" content="A React Starter Site Template" />
			</Helmet>

			<Nav />

			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/person/:param" component={Entity} />
				<Route path="/pub/:param" component={Entity} />
				<Route path="/journal/:param" component={Entity} />
				<Route path="/*" component={NoMatch} />
			</Switch>
		</div>
	);
};

export default withRouter(App);
