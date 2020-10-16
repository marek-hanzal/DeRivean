import React from 'react';
import { Route } from 'react-router';
import CreateView from '../view/CreateView';
import HomeView from '../view/HomeView';
import ListView from '../view/ListView';
import Path from './Path';

const Router = () =>
	<>
		<Route path={Path.player.home} component={HomeView}/>
		<Route path={Path.player.create} component={CreateView}/>
		<Route path={Path.player.list} component={ListView}/>
	</>
;
export default Router;
