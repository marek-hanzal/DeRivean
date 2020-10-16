import React from 'react';
import {Route} from 'react-router-dom';
import HomeView from '../view/HomeView';
import PublicPath from "./PublicPath";

const PublicRouter = () =>
	<>
		<Route exact path={PublicPath.root} component={HomeView}/>
	</>
;

export default PublicRouter;
