import React from "react";
import {Route, Switch} from "react-router-dom";
import HomeView from "site/internal/view/HomeView";
import SingOutView from "site/internal/view/SignOutView";
import SingInView from "site/internal/view/SingInView";
import NotFoundView from "view/NotFoundView";
import InternalPath from "./InternalPath";

const InternalRouter = () =>
	<Switch>
		<Route exact path={InternalPath.root} component={HomeView}/>
		<Route exact path={InternalPath.signIn} component={SingInView}/>
		<Route exact path={InternalPath.signOut} component={SingOutView}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default InternalRouter;
