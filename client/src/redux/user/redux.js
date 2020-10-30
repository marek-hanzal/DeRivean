import {combineReducers} from "redux";
import UserFetchRedux from "redux/user/fetch/redux";
import UserLoginRedux from "redux/user/login/redux";
import UserPageRedux from "redux/user/page/redux";
import UserRegisterRedux from "redux/user/register/redux";
import UserUpdateRedux from "redux/user/update/redux";

const UserRedux = {
	reducer: () => combineReducers({
		fetch: UserFetchRedux.reducer(),
		update: UserUpdateRedux.reducer(),
		login: UserLoginRedux.reducer(),
		page: UserPageRedux.reducer(),
		register: UserRegisterRedux.reducer(),
	}),
	selector: {
		branch: state => state.user,
	}
};

export default UserRedux;
