import React, {createElement} from "react";
import {Route, Switch} from "react-router";
import NotFoundView from "view/NotFoundView";

const Module = (
	{
		root,
		dashboard,
		create,
		edit,
		list,
		...props
	}) =>
	<Switch>
		<Route path={`${root}/dashboard`} render={() => createElement(dashboard, {root, ...props})}/>
		<Route path={`${root}/create`} render={() => createElement(create, {root, ...props})}/>
		<Route path={`${root}/edit`} render={() => createElement(edit, {root, ...props})}/>
		<Route path={`${root}/list`} render={() => createElement(list, {root, ...props})}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default Module;
