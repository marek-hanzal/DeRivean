import {handleActions} from "redux-actions";
import {onLoading} from "./action";

export default handleActions({
	[onLoading]: (state, {payload}) => ({...state, ...payload}),
}, false);
