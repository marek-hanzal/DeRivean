import React from 'react';
import {Route} from 'react-router';
import CreateView from '../view/entity/CreateView';
import HomeView from '../view/entity/HomeView';
import ListView from '../view/entity/ListView';
import Path from './Path';

const EntityRouter = () =>
	<>
		<Route path={Path.entity.home} component={HomeView}/>
		<Route path={Path.entity.create} component={CreateView}/>
		<Route path={Path.entity.list} component={ListView}/>
	</>
;
export default EntityRouter;
