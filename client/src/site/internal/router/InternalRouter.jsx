import React from 'react';
import {Route} from 'react-router-dom';
import HomeView from '../view/HomeView';
import InternalPath from "./InternalPath";

const InternalRouter = () =>
	<>
		<Route exact path={InternalPath.root} component={HomeView}/>
	</>
;

export default InternalRouter;
