import {combineReducers} from "redux";
import {BuildingRedux} from "redux/building/redux";
import {ClientRedux} from "redux/client/redux";
import {ContentRedux} from "redux/content/redux";
import {DiscoveryRedux} from "redux/discovery/redux";
import {HeroRedux} from "redux/hero/redux";
import {KingdomRedux} from "redux/kingdom/redux";
import {LoadingRedux} from "redux/loading/redux";
import {MenuRedux} from "redux/menu/redux";
import {NavigationRedux} from "redux/navigation/redux";
import {SearchRedux} from "redux/search/redux";
import {SessionRedux} from "redux/session/redux";
import {TranslationRedux} from "redux/translation/redux";
import {UserRedux} from "redux/user/redux";

export default combineReducers({
	building: BuildingRedux.reducer(),
	client: ClientRedux.reducer(),
	content: ContentRedux.reducer(),
	discovery: DiscoveryRedux.reducer(),
	kingdom: KingdomRedux.reducer(),
	hero: HeroRedux.reducer(),
	loading: LoadingRedux.reducer(),
	menu: MenuRedux.reducer(),
	navigation: NavigationRedux.reducer(),
	session: SessionRedux.reducer(),
	search: SearchRedux.reducer(),
	translation: TranslationRedux.reducer(),
	user: UserRedux.reducer(),
});
