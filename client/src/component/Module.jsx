import React, {createElement} from "react";
import {Route, Switch} from "react-router";
import NotFoundView from "view/NotFoundView";

const Module = ({root, home, create, edit, list, view}) =>
	<Switch>
		<Route path={`${root}/home`} render={() => createElement(home, {view, root})}/>
		<Route path={`${root}/create`} render={() => createElement(create, {view, root})}/>
		<Route path={`${root}/edit`} render={() => createElement(edit, {view, root})}/>
		<Route path={`${root}/list`} render={() => createElement(list, {view, root})}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default Module;
