import {handleActions} from "redux-actions";
import {onUserLoginDismiss, onUserLoginFailure, onUserLoginRequest, onUserLoginSuccess} from "redux/user/login/action";

export default handleActions({
	[onUserLoginRequest]: (state, {payload}) => ({...state, ...payload}),
	[onUserLoginSuccess]: (state, {payload}) => ({...state, ...payload}),
	[onUserLoginFailure]: (state, {payload}) => ({...state, ...payload}),
	[onUserLoginDismiss]: (state, {payload}) => ({...state, ...payload}),
}, {
	status: null,
	loading: false,
	payload: null,
});
