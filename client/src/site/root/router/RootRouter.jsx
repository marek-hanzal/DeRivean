import React from "react";
import {Route, Switch} from "react-router-dom";
import EntityPath from "site/root/module/entity/router/EntityPath";
import EntityRouter from "site/root/module/entity/router/EntityRouter";
import RootPath from "site/root/router/RootPath";
import HomeView from "site/root/view/HomeView";
import SingOutView from "site/root/view/SignOutView";
import SingInView from "site/root/view/SingInView";
import NotFoundView from "view/NotFoundView";

const RootRouter = () =>
	<Switch>
		<Route exact path={RootPath.root} component={HomeView}/>
		<Route exact path={RootPath.signIn} component={SingInView}/>
		<Route exact path={RootPath.signOut} component={SingOutView}/>

		<Route path={EntityPath.root} component={EntityRouter}/>

		<Route component={NotFoundView}/>
	</Switch>
;

export default RootRouter;
