import {handleActions} from "redux-actions";
import {onUserRegisterDismiss, onUserRegisterFailure, onUserRegisterRequest, onUserRegisterSuccess} from "redux/user/register/action";

const register = handleActions({
	[onUserRegisterRequest]: (state, {payload}) => payload,
	[onUserRegisterSuccess]: (state, {payload}) => payload,
	[onUserRegisterFailure]: (state, {payload}) => payload,
	[onUserRegisterDismiss]: (state, {payload}) => payload,
}, {
	status: null,
});

export default register;
