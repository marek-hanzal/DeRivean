import DiscoverySelector from "redux/discovery/selector";
import Loading from "redux/loading/action";
import {Server} from "server";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";

const KingdomAttributesAction = {
	request: requestAction("kingdom.attributes"),
	success: successAction("kingdom.attributes"),
	failure: failureAction("kingdom.attributes"),
	fetch: function () {
		return (dispatch, getState) => {
			dispatch(this.request());
			dispatch(Loading.start());
			return Server.get(DiscoverySelector.root.kingdom.attributes(getState()))
				.then(({data}) => {
					setTimeout(() => {
						dispatch(this.success(data));
						dispatch(Loading.finish());
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
};

export default KingdomAttributesAction;
