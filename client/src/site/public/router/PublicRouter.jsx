import React from "react";
import {Route, Switch} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";
import HomeView from "site/public/view/HomeView";
import LoginView from "site/public/view/LoginView";
import RegistrationView from "site/public/view/registration/RegistrationView";
import NotFoundView from "view/NotFoundView";

const PublicRouter = () =>
	<Switch>
		<Route exact path={PublicPath.root} component={HomeView}/>
		<Route exact path={PublicPath.registration} component={RegistrationView}/>
		<Route exact path={PublicPath.login} component={LoginView}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default PublicRouter;
