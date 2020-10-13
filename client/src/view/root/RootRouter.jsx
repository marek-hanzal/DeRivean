import React from 'react';
import {Route} from 'react-router-dom';
import HomeView from './HomeView';

const RootRouter = () =>
	<>
		<Route exact path="/" component={HomeView}/>
	</>
;

export default RootRouter;
