import {combineReducers} from "redux";
import login from "redux/user/login/reducer";
import register from "redux/user/register/reducer";

const user = combineReducers({
	register,
	login,
});

export default user;
