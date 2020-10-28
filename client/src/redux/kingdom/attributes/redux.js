import DiscoveryRedux from "redux/discovery/redux";
import KingdomRedux from "redux/kingdom/redux";
import LoadingRedux from "redux/loading/redux";
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
			dispatch(LoadingRedux.start());
			return Server.get(DiscoveryRedux.selector.root.kingdom.attributes(getState()))
				.then(({data}) => {
					setTimeout(() => {
						dispatch(this.success(data));
						dispatch(LoadingRedux.finish());
					}, 2200);
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
	},
};

export default KingdomAttributesRedux;
