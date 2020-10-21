import React, {createElement} from "react";
import {Route, Switch} from "react-router";
import NotFoundView from "view/NotFoundView";

const Module = (
	{
		root,
		home,
		create,
		edit,
		list,
		...props
	}) =>
	<Switch>
		<Route path={`${root}/home`} render={() => createElement(home, {root, ...props})}/>
		<Route path={`${root}/create`} render={() => createElement(create, {root, ...props})}/>
		<Route path={`${root}/edit`} render={() => createElement(edit, {root, ...props})}/>
		<Route path={`${root}/list`} render={() => createElement(list, {root, ...props})}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default Module;
