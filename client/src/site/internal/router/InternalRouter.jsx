import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import HomeView from "site/internal/view/HomeView";
import NotFoundView from "view/NotFoundView";
import InternalPath from "./InternalPath";

const InternalRouter = () =>
	<Switch>
		<Route exact path={InternalPath.root} component={HomeView}/>
		<Route exact path={InternalPath.signIn} render={() => <Redirect to={InternalPath.root}/>}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default InternalRouter;
