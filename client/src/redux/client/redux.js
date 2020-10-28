import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import onFetch from "utils/action/onFetch";
import reducerActions from "utils/action/reducerActions";

const ClientRedux = {
	request: requestAction("client"),
	success: successAction("client"),
	failure: failureAction("client"),
	fetch: function (href) {
		return onFetch(href, this.request, this.success, this.failure);
	},
	reducer: function () {
		return reducerActions([
			this.request,
			this.success,
			this.failure,
		]);
	},
	selector: {
		branch: state => state.client,
		getStatus: state => ClientRedux.selector.branch(state).status,
		/**
		 * return current backend discovery url
		 *
		 * @param state
		 * @returns {string}
		 */
		getDiscoveryHref: state => ClientRedux.selector.branch(state).payload.discovery,
	},
};

export default ClientRedux;
