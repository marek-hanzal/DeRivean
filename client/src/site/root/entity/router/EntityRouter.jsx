import React from 'react';
import {Route, Switch} from 'react-router';
import CreateView from '../view/CreateView';
import HomeView from '../view/HomeView';
import ListView from '../view/ListView';
import EntityPath from "./EntityPath";
import NotFoundView from "../../../../view/NotFoundView";

const EntityRouter = () =>
	<Switch>
		<Route exact path={EntityPath.home} component={HomeView}/>
		<Route exact path={EntityPath.create} component={CreateView}/>
		<Route exact path={EntityPath.list} component={ListView}/>
		<Route component={NotFoundView}/>
	</Switch>
;
export default EntityRouter;
