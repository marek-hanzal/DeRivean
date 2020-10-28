import {combineReducers} from "redux";
import KingdomAttributesRedux from "redux/kingdom/attributes/redux";

const KingdomRedux = {
	reducer: () => combineReducers({
		attributes: KingdomAttributesRedux.reducer(),
	}),
	selector: {
		branch: state => state.kingdom,
	},
};

export default KingdomRedux;
