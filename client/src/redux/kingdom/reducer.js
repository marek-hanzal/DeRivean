import {combineReducers} from "redux";
import KingdomAttributesAction from "redux/kingdom/attributes/action";

export default combineReducers({
	attributes: KingdomAttributesAction.reducer(),
});
