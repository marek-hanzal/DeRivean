import {combineReducers} from "redux";
import KingdomAttributesRedux from "redux/kingdom/attributes/redux";
import KingdomCreateRedux from "redux/kingdom/create/redux";
import KingdomPageRedux from "redux/kingdom/page/redux";

const KingdomRedux = {
	reducer: () => combineReducers({
		attributes: KingdomAttributesRedux.reducer(),
		create: KingdomCreateRedux.reducer(),
		page: KingdomPageRedux.reducer(),
	}),
	selector: {
		branch: state => state.kingdom,
	},
};

export default KingdomRedux;
