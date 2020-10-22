import {handleActions} from "redux-actions";
import {onUserFetchDismiss, onUserFetchFailure, onUserFetchRequest, onUserFetchSuccess} from "redux/user/fetch/action";

export default handleActions({
	[onUserFetchRequest]: (state, {payload}) => ({...state, ...payload}),
	[onUserFetchSuccess]: (state, {payload}) => ({...state, ...payload}),
	[onUserFetchFailure]: (state, {payload}) => ({...state, ...payload}),
	[onUserFetchDismiss]: (state, {payload}) => ({...state, ...payload}),
}, {
	status: null,
	loading: false,
	payload: null,
});
