import {handleActions} from "redux-actions";
import {onUserRegisterDismiss, onUserRegisterFailure, onUserRegisterRequest, onUserRegisterSuccess} from "redux/user/register/action";

const register = handleActions({
	[onUserRegisterRequest]: (state, {payload}) => ({...state, ...payload}),
	[onUserRegisterSuccess]: (state, {payload}) => ({...state, ...payload}),
	[onUserRegisterFailure]: (state, {payload}) => ({...state, ...payload}),
	[onUserRegisterDismiss]: (state, {payload}) => ({...state, ...payload}),
}, {
	status: null,
	loading: false,
});

export default register;
