import {handleActions} from "redux-actions";
import {onClientFailure, onClientRequest, onClientSuccess} from "./action";

export default handleActions({
	[onClientRequest]: (state, {payload}) => ({...state, ...payload}),
	[onClientFailure]: (state, {payload}) => ({...state, ...payload}),
	[onClientSuccess]: (state, {payload}) => ({...state, ...payload}),
}, {
	status: null,
	loading: false,
	payload: null,
});
