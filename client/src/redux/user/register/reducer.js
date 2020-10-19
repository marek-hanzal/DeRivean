import {handleActions} from "redux-actions";
import {onUserRegisterFailure, onUserRegisterRequest, onUserRegisterSuccess} from "redux/user/register/action";

const register = handleActions({
	[onUserRegisterRequest]: (state, {payload}) => payload,
	[onUserRegisterSuccess]: (state, {payload}) => payload,
	[onUserRegisterFailure]: (state, {payload}) => payload,
}, {
	status: null,
});

export default register;
