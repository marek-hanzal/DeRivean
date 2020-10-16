import React from 'react';
import {Route} from 'react-router-dom';
import HomeView from '../view/HomeView';
import InternalPath from "./InternalPath";

const Router = () =>
	<>
		<Route exact path={InternalPath.root} component={HomeView}/>
	</>
;

export default Router;
