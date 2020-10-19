import {combineReducers} from "redux";
import register from "redux/user/register/reducer";

const user = combineReducers({
	register,
});

export default user;
