import {handleActions} from "redux-actions";

const reducerSimpleActions = (actions, payload = null) => handleActions(actions.reduce((map, item) => ({...map, [item]: (state, {payload}) => ({...state, ...payload})}), {}), {...payload});

export default reducerSimpleActions;
