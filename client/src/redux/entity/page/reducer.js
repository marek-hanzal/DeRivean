import {handleActions} from "redux-actions";
import defaultPage from "utils/page";
import {onEntityPageFailure, onEntityPageRequest, onEntityPageSuccess} from "./action";

export default handleActions({
	[onEntityPageRequest]: (state, {payload}) => ({...state, ...payload}),
	[onEntityPageSuccess]: (state, {payload}) => ({...state, ...payload}),
	[onEntityPageFailure]: (state, {payload}) => ({...state, ...payload}),
}, {
	status: null,
	loading: false,
	payload: defaultPage,
});
