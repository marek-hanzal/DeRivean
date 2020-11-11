import {combineReducers} from "redux";
import {LoadingRedux} from "redux/loading/redux";
import {NavigationRedux} from "redux/navigation/redux";

export default combineReducers({
	loading: LoadingRedux.reducer(),
	navigation: NavigationRedux.reducer(),
});
