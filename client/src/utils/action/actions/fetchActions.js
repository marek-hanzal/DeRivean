import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";

const fetchActions = (name) => {
	return {
		request: requestAction(name),
		success: successAction(name),
		failure: failureAction(name),
	};
};

export default fetchActions;

