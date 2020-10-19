import {handleActions} from "redux-actions";
import {onDiscoveryFailure, onDiscoverySuccess} from "./action";

const payload = handleActions({
	[onDiscoverySuccess]: (state, {payload}) => payload,
	[onDiscoveryFailure]: (state, {payload}) => payload,
}, {});

export default payload;
