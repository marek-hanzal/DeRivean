import {handleActions} from "redux-actions";
import {onUserRegisterFailure, onUserRegisterSuccess} from "redux/user/register/action";

const register = handleActions({
	[onUserRegisterSuccess]: (state, {payload}) => payload,
	[onUserRegisterFailure]: (state, {payload}) => payload,
}, null);

export default register;
