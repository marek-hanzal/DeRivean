import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import onFetch from "utils/action/onFetch";

const
	onClientRequest = requestAction("client"),
	onClientSuccess = successAction("client"),
	onClientFailure = failureAction("client"),
	onClient        = href => onFetch(href, onClientRequest, onClientSuccess, onClientFailure);

export {
	onClientRequest,
	onClientSuccess,
	onClientFailure,
	onClient,
};
