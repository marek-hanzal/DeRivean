import React from "react";
import {Route, Switch} from "react-router";
import CreateBreadcrumbs from "site/root/player/component/breadcrumbs/CreateBreadcrumbs";
import HomeBreadcrumbs from "site/root/player/component/breadcrumbs/HomeBreadcrumbs";
import ListBreadcrumbs from "site/root/player/component/breadcrumbs/ListBreadcrumbs";
import PlayerPath from "site/root/player/router/PlayerPath";

const PlayerBreadcrumbs = () =>
	<Switch>
		<Route path={PlayerPath.home} component={HomeBreadcrumbs}/>
		<Route path={PlayerPath.create} component={CreateBreadcrumbs}/>
		<Route path={PlayerPath.list} component={ListBreadcrumbs}/>
	</Switch>
;

export default PlayerBreadcrumbs;
