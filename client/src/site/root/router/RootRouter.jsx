import SingOutView from "component/view/SingOutView";
import React from "react";
import {Route, Switch} from "react-router";
import UserPath from "site/root/module/user/router/UserPath";
import UserRouter from "site/root/module/user/router/UserRouter";
import RootPath from "site/root/router/RootPath";
import HomeView from "site/root/view/HomeView";
import SingInView from "site/root/view/SingInView";
import NotFoundView from "view/NotFoundView";

const RootRouter = () =>
	<Switch>
		<Route path={UserPath.root} component={UserRouter}/>
		<Route path={RootPath.signIn} component={SingInView}/>
		<Route path={RootPath.signOut} render={() => <SingOutView translation={"root"}/>}/>
		<Route path={RootPath.root} component={HomeView}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default RootRouter;
