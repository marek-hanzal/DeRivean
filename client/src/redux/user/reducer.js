import {combineReducers} from "redux";
import register from "redux/user/register/reducer";
import registerStatus from "redux/user/registerStatus/reducer";

const user = combineReducers({
	register,
	registerStatus,
});

export default user;
