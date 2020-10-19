import {combineReducers} from "redux";
import register from "redux/user/register/reducer";
import session from "redux/user/session/reducer";

const user = combineReducers({
	register,
	session,
});

export default user;
