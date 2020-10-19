import {handleActions} from "redux-actions";
import {onEntityPageFailure, onEntityPageSuccess} from "./action";

const payload = handleActions({
	[onEntityPageSuccess]: (state, {payload}) => payload,
	[onEntityPageFailure]: (state, {payload}) => payload,
}, {
	total: 0,
	limit: 0,
	size: 0,
	items: [],
});

export default payload;
