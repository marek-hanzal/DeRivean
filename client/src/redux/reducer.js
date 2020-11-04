import {combineReducers} from "redux";
import {BuildingRedux} from "redux/building/redux";
import {ClientRedux} from "redux/client/redux";
import {ContentRedux} from "redux/content/redux";
import {DiscoveryRedux} from "redux/discovery/redux";
import {HeroRedux} from "redux/hero/redux";
import {KingdomRedux} from "redux/kingdom/redux";
import {LoadingRedux} from "redux/loading/redux";
import {MenuRedux} from "redux/menu/redux";
import {SearchRedux} from "redux/search/redux";
import {ServerRedux} from "redux/server/redux";
import {SessionRedux} from "redux/session/redux";
import {StatisticsRedux} from "redux/statistics/redux";
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
	session: SessionRedux.reducer(),
	search: SearchRedux.reducer(),
	server: ServerRedux.reducer(),
	statistics: StatisticsRedux.reducer(),
	translation: TranslationRedux.reducer(),
	user: UserRedux.reducer(),
});
