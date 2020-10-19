import {handleActions} from "redux-actions";
import {onClientFailure, onClientSuccess} from "./action";

const payload = handleActions({
	[onClientSuccess]: (state, {payload}) => payload,
	[onClientFailure]: (state, {payload}) => payload,
}, {});

export default payload;
