import { createAction } from "redux-actions";
import toActionName from "utils/action/actions/toActionName";

const successAction = name => createAction(toActionName(name + ".success"), payload => ({
	status:  "SUCCESS",
	loading: false,
	error:   null,
	payload,
}));

export default successAction;
