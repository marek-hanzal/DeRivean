import React from "react";
import {Route, Switch} from "react-router";
import EntityPath from "site/root/module/entity/router/EntityPath";
import CreateView from "site/root/module/entity/view/CreateView";
import HomeView from "site/root/module/entity/view/HomeView";
import ListView from "site/root/module/entity/view/ListView";
import NotFoundView from "view/NotFoundView";

const EntityRouter = () =>
	<Switch>
		<Route exact path={EntityPath.home} component={HomeView}/>
		<Route exact path={EntityPath.create} component={CreateView}/>
		<Route exact path={EntityPath.list} component={ListView}/>
		<Route component={NotFoundView}/>
	</Switch>
;
export default EntityRouter;
