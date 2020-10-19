import {handleActions} from "redux-actions";
import {onUserLoginDismiss, onUserLoginFailure, onUserLoginRequest, onUserLoginSuccess} from "redux/user/login/action";

const register = handleActions({
	[onUserLoginRequest]: (state, {payload}) => ({...state, ...payload}),
	[onUserLoginSuccess]: (state, {payload}) => ({...state, ...payload}),
	[onUserLoginFailure]: (state, {payload}) => ({...state, ...payload}),
	[onUserLoginDismiss]: (state, {payload}) => ({...state, ...payload}),
}, {
	status: null,
});

export default register;
