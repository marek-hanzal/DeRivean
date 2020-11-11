import {combineReducers} from "redux";
import {NavigationRedux} from "redux/navigation/redux";

export default combineReducers({
	navigation: NavigationRedux.reducer(),
});
