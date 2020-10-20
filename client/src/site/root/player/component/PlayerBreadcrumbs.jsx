import React from "react";
import {Route, Switch} from "react-router";
import PlayerCreateBreadcrumbs from "site/root/player/component/PlayerCreateBreadcrumbs";
import PlayerHomeBreadcrumbs from "site/root/player/component/PlayerHomeBreadcrumbs";
import PlayerListBreadcrumbs from "site/root/player/component/PlayerListBreadcrumbs";
import PlayerPath from "site/root/player/router/PlayerPath";

const PlayerBreadcrumbs = () =>
	<Switch>
		<Route path={PlayerPath.home} component={PlayerHomeBreadcrumbs}/>
		<Route path={PlayerPath.create} component={PlayerCreateBreadcrumbs}/>
		<Route path={PlayerPath.list} component={PlayerListBreadcrumbs}/>
	</Switch>
;

export default PlayerBreadcrumbs;
