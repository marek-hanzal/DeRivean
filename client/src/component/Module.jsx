import React from "react";
import {Route, Switch} from "react-router";
import NotFoundView from "view/NotFoundView";

const Module = ({root, home, create, edit, list}) =>
	<Switch>
		<Route path={`${root}/home`} render={home}/>
		<Route path={`${root}/create`} component={create}/>
		<Route path={`${root}/edit`} component={edit}/>
		<Route path={`${root}/list`} component={list}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default Module;
