import {combineReducers} from "redux";
import collapse from "./collapse/reducer";
import open from "./open/reducer";

export default combineReducers({
	collapse,
	open,
});
