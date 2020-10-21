import React from "react";
import {Route, Switch} from "react-router";
import CreateBreadcrumbs from "site/root/module/entity/component/breadcrumbs/CreateBreadcrumbs";
import HomeBreadcrumbs from "site/root/module/entity/component/breadcrumbs/HomeBreadcrumbs";
import ListBreadcrumbs from "site/root/module/entity/component/breadcrumbs/ListBreadcrumbs";
import EntityPath from "site/root/module/entity/router/EntityPath";

const EntityBreadcrumbs = () =>
	<Switch>
		<Route path={EntityPath.home} component={HomeBreadcrumbs}/>
		<Route path={EntityPath.create} component={CreateBreadcrumbs}/>
		<Route path={EntityPath.list} component={ListBreadcrumbs}/>
	</Switch>
;

export default EntityBreadcrumbs;
