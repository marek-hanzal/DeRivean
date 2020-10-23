import SingOutView from "component/view/SingOutView";
import React from "react";
import { connect } from "react-redux";
import {
	Route,
	Switch
} from "react-router-dom";
import { onSessionClose } from "redux/session/action";
import InternalPath from "site/internal/router/InternalPath";
import RootView from "site/root/component/RootView";
import EntityModule from "site/root/module/entity/EntityModule";
import EntityPath from "site/root/module/entity/EntityPath";
import UserModule from "site/root/module/user/UserModule";
import UserPath from "site/root/module/user/UserPath";
import RootPath from "site/root/router/RootPath";
import HomeView from "site/root/view/HomeView";
import SingInView from "site/root/view/SingInView";
import NotFoundView from "view/NotFoundView";

const RootRouter = ({
						onLogout,
						translation = "root"
					}) =>
	<Switch>
		<Route exact path={RootPath.root} component={HomeView}/>
		<Route exact path={RootPath.signIn} component={SingInView}/>
		<Route exact path={InternalPath.signOut} render={() => <SingOutView translation={"root"} onLogout={onLogout}/>}/>

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

export default connect(
	state => ({}),
	dispatch => ({
		onLogout: () => dispatch(onSessionClose())
	}),
)(RootRouter);
