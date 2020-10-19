import {handleActions} from "redux-actions";
import {onUserSessionClose, onUserSessionOpen} from "redux/user/session/action";

const session = handleActions({
	[onUserSessionOpen]: (state, {payload}) => ({...state, ...payload}),
	[onUserSessionClose]: (state, {payload}) => ({...state, ...payload}),
}, {
	user: null
});

export default session;
