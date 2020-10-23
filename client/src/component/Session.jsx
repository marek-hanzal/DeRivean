import { connect } from "react-redux";
import { getSession } from "redux/session/selector";

const Session = (
	{
		session,
		sites,
	}) => sites[session.user ? session.user.site : "public"]
;

export default connect(
	state => ({
		session: getSession(state),
	}),
	dispatch => ({}),
)(Session);
