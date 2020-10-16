import React from 'react';
import {Route} from 'react-router';
import CreateView from '../view/CreateView';
import HomeView from '../view/HomeView';
import ListView from '../view/ListView';
import Path from './Path';

const Router = () =>
	<>
		<Route path={Path.home} component={HomeView}/>
		<Route path={Path.create} component={CreateView}/>
		<Route path={Path.list} component={ListView}/>
	</>
;
export default Router;
