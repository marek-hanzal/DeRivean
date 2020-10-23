import React from "react";
import {
	Route,
	Switch
} from "react-router-dom";
import PublicPath from "site/public/router/PublicPath";
import HomeView from "site/public/view/HomeView";
import SignUpView from "site/public/view/sign-up/SignUpView";
import SingOutView from "site/public/view/SignOutView";
import SingInView from "site/public/view/sing-in/SingInView";
import NotFoundView from "view/NotFoundView";

const PublicRouter = () =>
	<Switch>
		<Route exact path={PublicPath.root} component={HomeView}/>
		<Route exact path={PublicPath.signUp} component={SignUpView}/>
		<Route exact path={PublicPath.signIn} component={SingInView}/>
		<Route exact path={PublicPath.signOut} component={SingOutView}/>
		<Route component={NotFoundView}/>
	</Switch>
;

export default PublicRouter;
