import {handleActions} from "redux-actions";
import {onDiscoveryFailure, onDiscoveryRequest, onDiscoverySuccess} from "./action";

export default handleActions({
	[onDiscoveryRequest]: (state, {payload}) => ({...state, ...payload}),
	[onDiscoverySuccess]: (state, {payload}) => ({...state, ...payload}),
	[onDiscoveryFailure]: (state, {payload}) => ({...state, ...payload}),
}, {
	status: null,
	loading: false,
	payload: null,
});
