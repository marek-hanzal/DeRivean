import React from 'react';
import {Route, Switch} from 'react-router-dom';
import EntityRouter from '../entity/router/EntityRouter';
import PlayerRouter from '../player/router/PlayerRouter';
import HomeView from '../view/HomeView';
import RootPath from './RootPath';
import PlayerPath from "../player/router/PlayerPath";
import EntityPath from "../entity/router/EntityPath";
import NotFoundView from "../../../view/NotFoundView";

const RootRouter = () =>
	<Switch>
		<Route exact path={RootPath.root} component={HomeView}/>
		<Route path={PlayerPath.root} component={PlayerRouter}/>
		<Route path={EntityPath.root} component={EntityRouter}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default RootRouter;
