import {handleActions} from "redux-actions";
import {onClientFailure, onClientRequest, onClientSuccess} from "./action";

const client = handleActions({
	[onClientRequest]: (state, {payload}) => ({...state, ...payload}),
	[onClientFailure]: (state, {payload}) => ({...state, ...payload}),
	[onClientSuccess]: (state, {payload}) => ({...state, ...payload}),
}, {
	status: null,
	loading: false,
	payload: null,
});

export default client;
