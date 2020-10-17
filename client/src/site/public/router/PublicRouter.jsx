import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeView from '../view/HomeView';
import PublicPath from "./PublicPath";
import NotFoundView from "../../../view/NotFoundView";
import RegistrationView from "../view/RegistrationView";
import LoginView from "../view/LoginView";

const PublicRouter = () =>
	<Switch>
		<Route exact path={PublicPath.root} component={HomeView}/>
		<Route exact path={PublicPath.registration} component={RegistrationView}/>
		<Route exact path={PublicPath.login} component={LoginView}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default PublicRouter;
