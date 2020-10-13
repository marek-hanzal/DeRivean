import React from 'react';
import {Route} from 'react-router-dom';
import HomeView from './HomeView';

const PublicRouter = () =>
	<>
		<Route exact path="/" component={HomeView}/>
	</>
;

export default PublicRouter;
