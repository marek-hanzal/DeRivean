import {createAction} from "redux-actions";
import toActionName from "utils/action/actions/toActionName";

const dismissAction = (name, payload = null) => createAction(toActionName(name + ".dismiss"), () => ({
	status: null,
	loading: false,
	payload,
	error: null,
}));

export default dismissAction;
