import DiscoveryRedux from "redux/discovery/redux";
import KingdomRedux from "redux/kingdom/redux";
import LoadingRedux from "redux/loading/redux";
import {Server} from "server";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";

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
				})
				.catch(({response}) => {
					dispatch(this.failure(response));
					dispatch(LoadingRedux.finish());
				});
		};
	},
	reducer: function () {
	},
	selector: {
		branch: state => KingdomRedux.selector.branch(state),
	}
};

export default KingdomCreateRedux;
