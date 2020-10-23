import SingOutView from "component/view/SingOutView";
import React from "react";
import { connect } from "react-redux";
import {
	Route,
	Switch
} from "react-router-dom";
import { onSessionClose } from "redux/session/action";
import KingdomPath from "site/internal/module/kingdom/router/KingdomPath";
import KingdomRouter from "site/internal/module/kingdom/router/KingdomRouter";
import HomeView from "site/internal/view/HomeView";
import SingInView from "site/internal/view/SingInView";
import NotFoundView from "view/NotFoundView";
import InternalPath from "./InternalPath";

const InternalRouter = ({onLogout}) =>
	<Switch>
		<Route exact path={InternalPath.root} component={HomeView}/>
		<Route exact path={InternalPath.signIn} component={SingInView}/>
		<Route exact path={InternalPath.signOut} render={() => <SingOutView translation={"internal"} onLogout={onLogout}/>}/>

		<Route path={KingdomPath.root} component={KingdomRouter}/>

		<Route component={NotFoundView}/>
	</Switch>
;

export default connect(
	state => ({}),
	dispatch => ({
		onLogout: () => dispatch(onSessionClose())
	}),
)(InternalRouter);
