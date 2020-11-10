import {combineReducers} from "redux";
import {ContentRedux} from "redux/content/redux";
import {LoadingRedux} from "redux/loading/redux";
import {MenuRedux} from "redux/menu/redux";
import {NavigationRedux} from "redux/navigation/redux";
import {SessionRedux} from "redux/session/redux";

export default combineReducers({
	content: ContentRedux.reducer(),
	loading: LoadingRedux.reducer(),
	menu: MenuRedux.reducer(),
	navigation: NavigationRedux.reducer(),
	session: SessionRedux.reducer(),
});
