import {handleActions} from "redux-actions";
import {onUserRegisterStatus} from "redux/user/registerStatus/action";

const registerStatus = handleActions({
	[onUserRegisterStatus]: (state, {payload}) => payload,
}, null);

export default registerStatus;
