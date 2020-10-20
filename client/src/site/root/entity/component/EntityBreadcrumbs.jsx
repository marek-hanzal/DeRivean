import React from "react";
import {Route, Switch} from "react-router";
import EntityCreateBreadcrumbs from "site/root/entity/component/EntityCreateBreadcrumbs";
import EntityHomeBreadcrumbs from "site/root/entity/component/EntityHomeBreadcrumbs";
import EntityListBreadcrumbs from "site/root/entity/component/EntityListBreadcrumbs";
import EntityPath from "site/root/entity/router/EntityPath";

const EntityBreadcrumbs = () =>
	<Switch>
		<Route path={EntityPath.home} component={EntityHomeBreadcrumbs}/>
		<Route path={EntityPath.create} component={EntityCreateBreadcrumbs}/>
		<Route path={EntityPath.list} component={EntityListBreadcrumbs}/>
	</Switch>
;

export default EntityBreadcrumbs;
