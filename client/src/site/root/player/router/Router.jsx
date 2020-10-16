import React from 'react';
import {Route} from 'react-router';
import CreateView from '../view/CreateView';
import HomeView from '../view/HomeView';
import ListView from '../view/ListView';
import PlayerPath from "./PlayerPath";

const Router = () =>
	<>
		<Route path={PlayerPath.home} component={HomeView}/>
		<Route path={PlayerPath.create} component={CreateView}/>
		<Route path={PlayerPath.list} component={ListView}/>
	</>
;
export default Router;
