import buildUrl from "build-url";
import DiscoveryRedux from "redux/discovery/redux";
import KingdomRedux from "redux/kingdom/redux";
import {Server} from "server";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";
import defaultPage from "utils/page";

const KingdomPageRedux = {
	request: requestAction("kingdom.page", defaultPage),
	success: successAction("kingdom.page"),
	failure: failureAction("kingdom.page"),
	fetch: function (user, page, size = 100) {
		return (dispatch, getState) => {
			dispatch(this.request());
			return Server.get(buildUrl(DiscoveryRedux.selector.root.user.kingdom.page(getState(), user, page), {queryParams: {limit: size.toString()}}))
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
		], defaultPage);
	},
	selector: {
		branch: state => KingdomRedux.selector.branch(state).page,
		isLoading: state => KingdomPageRedux.selector.branch(state).loading,
		getPayload: state => KingdomPageRedux.selector.branch(state).payload,
	},
};

export default KingdomPageRedux;
