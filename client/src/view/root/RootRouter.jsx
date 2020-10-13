import React from 'react';
import {Route} from 'react-router-dom';
import DashboardView from './DashboardView';

const RootRouter = () =>
	<>
		<Route exact path="/" component={DashboardView}/>
	</>
;

export default RootRouter;
