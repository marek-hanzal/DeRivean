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
		view,
		translation,
	}) =>
	<Switch>
		<Route path={`${root}/home`} render={() => createElement(home, {view, root, translation})}/>
		<Route path={`${root}/create`} render={() => createElement(create, {view, root, translation})}/>
		<Route path={`${root}/edit`} render={() => createElement(edit, {view, root, translation})}/>
		<Route path={`${root}/list`} render={() => createElement(list, {view, root, translation})}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default Module;
