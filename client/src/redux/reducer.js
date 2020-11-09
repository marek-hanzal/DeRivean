import {combineReducers} from "redux";
import {ClientRedux} from "redux/client/redux";
import {ContentRedux} from "redux/content/redux";
import {DiscoveryRedux} from "redux/discovery/redux";
import {LoadingRedux} from "redux/loading/redux";
import {MenuRedux} from "redux/menu/redux";
import {NavigationRedux} from "redux/navigation/redux";
import {SessionRedux} from "redux/session/redux";
import {UserRedux} from "redux/user/redux";

export default combineReducers({
	client: ClientRedux.reducer(),
	content: ContentRedux.reducer(),
	discovery: DiscoveryRedux.reducer(),
	loading: LoadingRedux.reducer(),
	menu: MenuRedux.reducer(),
	navigation: NavigationRedux.reducer(),
	session: SessionRedux.reducer(),
	user: UserRedux.reducer(),
});
