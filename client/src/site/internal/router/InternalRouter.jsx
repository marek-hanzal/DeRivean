import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeView from '../view/HomeView';
import InternalPath from "./InternalPath";
import NotFoundView from "../../../view/NotFoundView";

const InternalRouter = () =>
	<Switch>
		<Route exact path={InternalPath.root} component={HomeView}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default InternalRouter;
