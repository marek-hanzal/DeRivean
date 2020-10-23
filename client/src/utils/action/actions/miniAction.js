import { createAction } from "redux-actions";
import toActionName from "utils/action/actions/toActionName";

const miniAction = (name, state) => createAction(toActionName(name), value => ({[state]: value}));

export default miniAction;
