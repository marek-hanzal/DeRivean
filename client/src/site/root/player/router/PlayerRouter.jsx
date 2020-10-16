import React from 'react';
import {Route, Switch} from 'react-router';
import CreateView from '../view/CreateView';
import HomeView from '../view/HomeView';
import ListView from '../view/ListView';
import PlayerPath from "./PlayerPath";
import NotFoundView from "../../../../view/NotFoundView";

const PlayerRouter = () =>
	<Switch>
		<Route exact={true} path={PlayerPath.home} component={HomeView}/>
		<Route path={PlayerPath.create} component={CreateView}/>
		<Route path={PlayerPath.list} component={ListView}/>
		<Route component={NotFoundView}/>
	</Switch>
;
export default PlayerRouter;
