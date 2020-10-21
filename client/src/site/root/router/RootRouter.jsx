import React from "react";
import {Route, Switch} from "react-router-dom";
import RootView from "site/root/component/RootView";
import EntityModule from "site/root/module/entity/EntityModule";
import EntityPath from "site/root/module/entity/router/EntityPath";
import UserPath from "site/root/module/user/router/UserPath";
import UserModule from "site/root/module/user/UserModule";
import RootPath from "site/root/router/RootPath";
import HomeView from "site/root/view/HomeView";
import SingOutView from "site/root/view/SignOutView";
import SingInView from "site/root/view/SingInView";
import NotFoundView from "view/NotFoundView";

const RootRouter = ({translation = "root"}) =>
	<Switch>
		<Route exact path={RootPath.root} component={HomeView}/>
		<Route exact path={RootPath.signIn} component={SingInView}/>
		<Route exact path={RootPath.signOut} component={SingOutView}/>

		<Route path={EntityPath.root}>
			<EntityModule
				root={EntityPath.root}
				view={RootView}
				translation={translation}
			/>
		</Route>

		<Route path={UserPath.root}>
			<UserModule
				root={UserPath.root}
				view={RootView}
				translation={translation}
			/>
		</Route>

		<Route component={NotFoundView}/>
	</Switch>
;

export default RootRouter;
