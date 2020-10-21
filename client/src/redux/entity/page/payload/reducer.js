import {handleActions} from "redux-actions";
import defaultPage from "utils/page";
import {onEntityPageFailure, onEntityPageSuccess} from "./action";

const payload = handleActions({
	[onEntityPageSuccess]: (state, {payload}) => payload,
	[onEntityPageFailure]: (state, {payload}) => payload,
}, defaultPage);

export default payload;
