import buildUrl from "build-url";
import DiscoveryRedux from "redux/discovery/redux";
import Entity from "redux/entity/redux";
import {Server} from "server";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";
import defaultPage from "utils/page";

const EntityPageRedux = {
	request: requestAction("entity.page", defaultPage),
	success: successAction("entity.page"),
	failure: failureAction("entity.page"),
	fetch: function (page, size = 100) {
		return (dispatch, getState) => {
			dispatch(this.request());
			return Server.get(buildUrl(DiscoveryRedux.selector.root.entity.page(getState(), page), {queryParams: {limit: size.toString(),}}))
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
		branch: state => Entity.selector.branch(state).page,
		isLoading: state => EntityPageRedux.selector.branch(state).loading,
		getPayload: state => EntityPageRedux.selector.branch(state).payload,
	},
};

export default EntityPageRedux;
