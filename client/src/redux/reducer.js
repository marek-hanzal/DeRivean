import {combineReducers} from "redux";
import {LoadingRedux} from "redux/loading/redux";
import {MenuRedux} from "redux/menu/redux";
import {NavigationRedux} from "redux/navigation/redux";

export default combineReducers({
	loading: LoadingRedux.reducer(),
	menu: MenuRedux.reducer(),
	navigation: NavigationRedux.reducer(),
});
