import React from "react";
import {Route, Switch} from "react-router-dom";
import EntityPath from "site/root/entity/router/EntityPath";
import EntityRouter from "site/root/entity/router/EntityRouter";
import PlayerPath from "site/root/player/router/PlayerPath";
import PlayerRouter from "site/root/player/router/PlayerRouter";
import RootPath from "site/root/router/RootPath";
import HomeView from "site/root/view/HomeView";
import SingOutView from "site/root/view/SignOutView";
import SingInView from "site/root/view/SingInView";
import NotFoundView from "view/NotFoundView";

const RootRouter = () =>
	<Switch>
		<Route exact path={RootPath.root} component={HomeView}/>
		<Route path={PlayerPath.root} component={PlayerRouter}/>
		<Route path={EntityPath.root} component={EntityRouter}/>
		<Route exact path={RootPath.signIn} component={SingInView}/>
		<Route exact path={RootPath.signOut} component={SingOutView}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default RootRouter;
