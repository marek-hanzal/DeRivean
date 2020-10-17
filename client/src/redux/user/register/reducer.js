import {handleActions} from "redux-actions";
import {onUserRegisterSuccess} from "redux/user/register/action";

const register = handleActions({
	[onUserRegisterSuccess]: (state, {payload}) => payload,
}, null);

export default register;
