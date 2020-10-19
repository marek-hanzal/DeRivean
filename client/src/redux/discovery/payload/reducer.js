import {handleActions} from "redux-actions";
import {onDiscoveryFailure, onDiscoveryRequest, onDiscoverySuccess} from "./action";

const payload = handleActions({
	[onDiscoveryRequest]: (state, {payload}) => ({...state, ...payload}),
	[onDiscoverySuccess]: (state, {payload}) => ({...state, ...payload}),
	[onDiscoveryFailure]: (state, {payload}) => ({...state, ...payload}),
}, {});

export default payload;
