import {createAction} from "redux-actions";
import toActionName from "utils/action/actions/toActionName";

const requestAction = (name, defaultPayload = null) => createAction(toActionName(name + ".request"), (payload = defaultPayload) => ({
	status: "REQUEST",
	loading: true,
	error: null,
	payload,
}));

export default requestAction;
