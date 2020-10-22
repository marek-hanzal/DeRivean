import React, {createElement} from "react";
import {Route, Switch} from "react-router";
import NotFoundView from "view/NotFoundView";

const Module = (
	{
		root,
		dashboard,
		home,
		create,
		edit,
		list,
		...other
	}) =>
	<Switch>
		<Route path={`${root}/dashboard`} render={props => createElement(dashboard, {root, ...props, ...other})}/>
		<Route path={`${root}/:uuid/home`} render={props => createElement(home, {root, ...props, ...other})}/>
		<Route path={`${root}/create`} render={props => createElement(create, {root, ...props, ...other})}/>
		<Route path={`${root}/edit`} render={props => createElement(edit, {root, ...props, ...other})}/>
		<Route path={`${root}/list`} render={props => createElement(list, {root, ...props, ...other})}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default Module;
