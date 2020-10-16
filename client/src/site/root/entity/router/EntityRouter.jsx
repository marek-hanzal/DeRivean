import React from 'react';
import {Route, Switch} from 'react-router';
import CreateView from '../view/CreateView';
import HomeView from '../view/HomeView';
import ListView from '../view/ListView';
import EntityPath from "./EntityPath";

const EntityRouter = () =>
	<Switch>
		<Route exact={true} path={EntityPath.home} component={HomeView}/>
		<Route path={EntityPath.create} component={CreateView}/>
		<Route path={EntityPath.list} component={ListView}/>
	</Switch>
;
export default EntityRouter;
