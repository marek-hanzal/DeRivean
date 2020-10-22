import {handleActions} from "redux-actions";
import defaultState from "utils/action/defaultState";

const reducerActions = (actions, payload = null) => handleActions(actions.reduce((map, item) => ({...map, [item]: (state, {payload}) => ({...state, ...payload})}), {}), defaultState(payload));

export default reducerActions;
