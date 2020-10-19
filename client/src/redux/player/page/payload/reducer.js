import {handleActions} from "redux-actions";
import {onPlayerPageFailure, onPlayerPageSuccess} from "./action";

const payload = handleActions({
	[onPlayerPageSuccess]: (state, {payload}) => payload,
	[onPlayerPageFailure]: (state, {payload}) => payload,
}, {
	total: 0,
	limit: 0,
	size: 0,
	items: [],
});

export default payload;
