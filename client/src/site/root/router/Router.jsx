import React from 'react';
import {Route} from 'react-router-dom';
import HomeView from '../view/HomeView';

const Router = () =>
	<>
		<Route exact path="/" component={HomeView}/>
	</>
;

export default Router;
