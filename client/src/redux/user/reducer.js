import { combineReducers } from "redux";
import fetch from "redux/user/fetch/reducer";
import login from "redux/user/login/reducer";
import page from "redux/user/page/reducer";
import register from "redux/user/register/reducer";

export default combineReducers({
	register,
	login,
	page,
	fetch,
});
