import React from "react";
import {Route, Switch} from "react-router";
import PlayerPath from "site/root/player/router/PlayerPath";
import CreateView from "site/root/player/view/CreateView";
import HomeView from "site/root/player/view/HomeView";
import ListView from "site/root/player/view/ListView";
import NotFoundView from "view/NotFoundView";

const PlayerRouter = () =>
	<Switch>
		<Route exact path={PlayerPath.home} component={HomeView}/>
		<Route exact path={PlayerPath.create} component={CreateView}/>
		<Route exact path={PlayerPath.list} component={ListView}/>
		<Route component={NotFoundView}/>
	</Switch>
;
export default PlayerRouter;
