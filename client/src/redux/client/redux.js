import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import onFetch from "utils/action/onFetch";

const actions = fetchActions("client");

const ClientRedux = {
	fetch: href => onFetch(href, actions),
	reducer: () => fetchReducer(actions),
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
