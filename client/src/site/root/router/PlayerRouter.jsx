import React from 'react';
import {Route} from 'react-router';
import CreateView from '../view/player/CreateView';
import HomeView from '../view/player/HomeView';
import ListView from '../view/player/ListView';
import Path from './Path';

const PlayerRouter = () =>
	<>
		<Route path={Path.player.home} component={HomeView}/>
		<Route path={Path.player.create} component={CreateView}/>
		<Route path={Path.player.list} component={ListView}/>
	</>
;
export default PlayerRouter;
