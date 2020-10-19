import React from "react";
import {connect} from "react-redux";
import {getSession} from "redux/session/selector";
import InternalRouter from "site/internal/router/InternalRouter";
import PublicRouter from "site/public/router/PublicRouter";
import RootRouter from "site/root/router/RootRouter";

const Session = (
	{
		session,
	}) =>
	({
		public: <PublicRouter/>,
		internal: <InternalRouter/>,
		root: <RootRouter/>
	}[session.user ? session.user.site : "public"])
;

export default connect(
	state => ({
		session: getSession(state),
	}),
	dispatch => ({}),
)(Session);
