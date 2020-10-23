import React from "react";
import {Route, Switch} from "react-router";
import UserPath from "site/root/module/user/router/UserPath";
import DashboardView from "site/root/module/user/view/DashboardView";

const UserRouter = () =>
	<Switch>
		<Route path={UserPath.dashboard} component={DashboardView}/>
	</Switch>
;

export default UserRouter;
