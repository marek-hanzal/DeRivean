import React from 'react';
import { Route } from 'react-router-dom';
import { default as EntityPath } from '../entity/router/Path';
import { default as EntityRouter } from '../entity/router/Router';
import { default as PlayerPath } from '../player/router/Path';
import { default as PlayerRouter } from '../player/router/Router';
import HomeView from '../view/HomeView';
import Path from './Path';

const Router = () =>
	<>
		<Route exact path={Path.root} component={HomeView}/>
		<Route path={PlayerPath.root} component={PlayerRouter}/>
		<Route path={EntityPath.root} component={EntityRouter}/>
	</>
;

export default Router;
