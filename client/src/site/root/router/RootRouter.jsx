import React from 'react';
import {Route} from 'react-router-dom';
import EntityRouter from '../entity/router/EntityRouter';
import PlayerRouter from '../player/router/PlayerRouter';
import HomeView from '../view/HomeView';
import RootPath from './RootPath';
import PlayerPath from "../player/router/PlayerPath";
import EntityPath from "../entity/router/EntityPath";

const RootRouter = () =>
	<>
		<Route exact path={RootPath.root} component={HomeView}/>
		<Route path={PlayerPath.root} component={PlayerRouter}/>
		<Route path={EntityPath.root} component={EntityRouter}/>
	</>
;

export default RootRouter;
