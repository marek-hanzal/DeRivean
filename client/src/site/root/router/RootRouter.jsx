import React from "react";
import {Route, Switch} from "react-router-dom";
import EntityPath from "site/root/entity/router/EntityPath";
import EntityRouter from "site/root/entity/router/EntityRouter";
import PlayerPath from "site/root/player/router/PlayerPath";
import PlayerRouter from "site/root/player/router/PlayerRouter";
import HomeView from "site/root/view/HomeView";
import NotFoundView from "view/NotFoundView";
import RootPath from "./RootPath";

const RootRouter = () =>
	<Switch>
		<Route exact path={RootPath.root} component={HomeView}/>
		<Route path={PlayerPath.root} component={PlayerRouter}/>
		<Route path={EntityPath.root} component={EntityRouter}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default RootRouter;
