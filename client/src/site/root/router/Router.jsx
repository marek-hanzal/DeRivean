import React from 'react';
import {Route} from 'react-router-dom';
import {default as EntityRouter} from '../entity/router/Router';
import {default as PlayerRouter} from '../player/router/Router';
import HomeView from '../view/HomeView';
import RootPath from './RootPath';
import PlayerPath from "../player/router/PlayerPath";
import EntityPath from "../entity/router/EntityPath";

const Router = () =>
	<>
		<Route exact path={RootPath.root} component={HomeView}/>
		<Route path={PlayerPath.root} component={PlayerRouter}/>
		<Route path={EntityPath.root} component={EntityRouter}/>
	</>
;

export default Router;
