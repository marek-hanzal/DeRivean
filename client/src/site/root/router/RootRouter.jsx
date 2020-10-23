import SingOutView from "component/view/SingOutView";
import React from "react";
import {
	Route,
	Switch
} from "react-router";
import RootPath from "site/root/router/RootPath";
import HomeView from "site/root/view/HomeView";
import SingInView from "site/root/view/SingInView";

const RootRouter = () =>
	<Switch>
		<Route path={RootPath.signIn} component={SingInView}/>
		<Route path={RootPath.signOut} render={() => <SingOutView translation={"root"}/>}/>
		<Route path={RootPath.root} component={HomeView}/>
	</Switch>
;

export default RootRouter;
