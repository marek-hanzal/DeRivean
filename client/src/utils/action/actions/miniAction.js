import { createAction } from "redux-actions";
import toActionName from "utils/action/actions/toActionName";

const miniAction = (name, state, defaultValue = null) => createAction(toActionName(name), value => ({[state]: (value || defaultValue)}));

export default miniAction;
