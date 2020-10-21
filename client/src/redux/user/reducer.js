import {combineReducers} from "redux";
import login from "redux/user/login/reducer";
import page from "redux/user/page/reducer";
import register from "redux/user/register/reducer";

const user = combineReducers({
	register,
	login,
	page,
});

export default user;
