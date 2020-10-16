import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeView from '../view/HomeView';
import PublicPath from "./PublicPath";
import NotFoundView from "../../../view/NotFoundView";

const PublicRouter = () =>
	<Switch>
		<Route exact path={PublicPath.root} component={HomeView}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default PublicRouter;
