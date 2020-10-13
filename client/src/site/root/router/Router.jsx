import React from 'react';
import {Route} from 'react-router-dom';
import HomeView from '../view/HomeView';
import Path from './Path';
import PlayerRouter from './PlayerRouter';

const Router = () =>
	<>
		<Route exact path="/" component={HomeView}/>
		<Route path={Path.player.root} component={PlayerRouter}/>
	</>
;

export default Router;
