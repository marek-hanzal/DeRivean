import React from 'react';
import {Route} from 'react-router-dom';
import HomeView from '../view/HomeView';
import EntityRouter from './EntityRouter';
import Path from './Path';
import PlayerRouter from './PlayerRouter';

const Router = () =>
	<>
		<Route exact path="/" component={HomeView}/>
		<Route path={Path.player.root} component={PlayerRouter}/>
		<Route path={Path.entity.root} component={EntityRouter}/>
	</>
;

export default Router;
