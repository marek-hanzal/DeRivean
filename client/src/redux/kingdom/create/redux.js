import DiscoveryRedux from "redux/discovery/redux";
import KingdomRedux from "redux/kingdom/redux";
import LoadingRedux from "redux/loading/redux";
import {Server} from "server";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";

const KingdomCreateRedux = {
	request: requestAction("kingdom.create"),
	success: successAction("kingdom.create"),
	failure: failureAction("kingdom.create"),
	create: function (kingdom) {
		return (dispatch, getState) => {
			dispatch(LoadingRedux.start());
			dispatch(this.request());
			return Server.post(DiscoveryRedux.selector.root.kingdom.create(getState()), kingdom)
				.then(({data}) => {
					dispatch(this.success(data));
					dispatch(LoadingRedux.finish());
					return Promise.resolve(data);
				})
				.catch(({response}) => {
					dispatch(this.failure(response.data));
					dispatch(LoadingRedux.finish());
					return Promise.reject(response.data);
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
		branch: state => KingdomRedux.selector.branch(state).create,
		isLoading: state => KingdomCreateRedux.selector.branch(state).loading,
		getStatus: state => KingdomCreateRedux.selector.branch(state).status,
		getError: state => KingdomCreateRedux.selector.branch(state).error,
		getPayload: state => KingdomCreateRedux.selector.branch(state).payload,
	}
};

export default KingdomCreateRedux;
