import {handleActions} from "redux-actions";
import {onMenuCollapse} from "./action";

const collapse = handleActions({
	[onMenuCollapse]: (state, {payload}) => payload,
}, false);

export default collapse;
