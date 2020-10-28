import DiscoveryRedux from "redux/discovery/redux";
import KingdomRedux from "redux/kingdom/redux";
import {Server} from "server";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";

const KingdomAttributesRedux = {
	request: requestAction("kingdom.attributes"),
	success: successAction("kingdom.attributes"),
	failure: failureAction("kingdom.attributes"),
	fetch: function () {
		return (dispatch, getState) => {
			dispatch(this.request());
			return Server.get(DiscoveryRedux.selector.root.kingdom.attributes(getState()))
				.then(({data}) => {
					dispatch(this.success(data));
				})
				.catch(({response}) => {
					dispatch(this.failure(response));
				});
		};
	},
	reducer: function () {
		return reducerActions([
			this.request,
			this.success,
			this.failure,
		]);
	},
	selector: {
		branch: state => KingdomRedux.selector.branch(state).attributes,
		isLoading: state => KingdomAttributesRedux.selector.branch(state).loading,
		getPayload: state => KingdomAttributesRedux.selector.branch(state).payload,
	},
};

export default KingdomAttributesRedux;
