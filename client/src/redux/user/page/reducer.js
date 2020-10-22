import {handleActions} from "redux-actions";
import defaultPage from "utils/page";
import {onUserPageFailure, onUserPageRequest, onUserPageSuccess} from "./action";

export default handleActions({
	[onUserPageRequest]: (state, {payload}) => ({...state, ...payload}),
	[onUserPageSuccess]: (state, {payload}) => ({...state, ...payload}),
	[onUserPageFailure]: (state, {payload}) => ({...state, ...payload}),
}, {
	status: null,
	loading: false,
	payload: defaultPage,
});
