import {combineReducers} from "redux";
import BuildingRedux from "redux/building/redux";
import ClientRedux from "redux/client/redux";
import ContentRedux from "redux/content/redux";
import DiscoveryRedux from "redux/discovery/redux";
import EntityRedux from "redux/entity/redux";
import KingdomRedux from "redux/kingdom/redux";
import LoadingRedux from "redux/loading/redux";
import MenuRedux from "redux/menu/redux";
import SessionRedux from "redux/session/redux";
import UserRedux from "redux/user/redux";

export default combineReducers({
	building: BuildingRedux.reducer(),
	client: ClientRedux.reducer(),
	content: ContentRedux.reducer(),
	discovery: DiscoveryRedux.reducer(),
	entity: EntityRedux.reducer(),
	kingdom: KingdomRedux.reducer(),
	loading: LoadingRedux.reducer(),
	menu: MenuRedux.reducer(),
	session: SessionRedux.reducer(),
	user: UserRedux.reducer(),
});
