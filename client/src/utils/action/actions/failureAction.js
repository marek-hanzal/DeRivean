import { createAction } from "redux-actions";
import toActionName from "utils/action/actions/toActionName";

const failureAction = name => createAction(toActionName(name + ".failure"), error => ({
	status:  "FAILURE",
	loading: false,
	payload: null,
	error,
}));

export default failureAction;
