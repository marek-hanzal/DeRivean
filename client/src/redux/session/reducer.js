import {handleActions} from "redux-actions";
import {onSessionClose, onSessionOpen} from "redux/session/action";

const session = handleActions({
	[onSessionOpen]: (state, {payload}) => ({...state, ...payload}),
	[onSessionClose]: (state, {payload}) => ({...state, ...payload}),
}, {
	user: {
		site: "public",
	},
});

export default session;