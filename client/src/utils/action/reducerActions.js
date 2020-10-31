import {handleActions} from "redux-actions";

const defaultState = (payload = null) => ({
	status: null,
	loading: false,
	payload,
});

const reducerActions = (actions, payload = null) => handleActions(actions.reduce((map, item) => ({...map, [item]: (state, {payload}) => ({...state, ...payload})}), {}), defaultState(payload));

export default reducerActions;
