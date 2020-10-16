import React from 'react';
import {Route} from 'react-router';
import CreateView from '../view/CreateView';
import HomeView from '../view/HomeView';
import ListView from '../view/ListView';
import EntityPath from "./EntityPath";

const EntityRouter = () =>
	<>
		<Route path={EntityPath.home} component={HomeView}/>
		<Route path={EntityPath.create} component={CreateView}/>
		<Route path={EntityPath.list} component={ListView}/>
	</>
;
export default EntityRouter;
