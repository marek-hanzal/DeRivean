import DiscoveryRedux from "redux/discovery/redux";
import UserRedux from "redux/user/redux";
import {Server} from "server";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";

const UserFetchRedux = {
	request: requestAction("user.fetch"),
	success: successAction("user.fetch"),
	failure: failureAction("user.fetch"),
	fetch: function (uuid) {
		return (dispatch, getState) => {
			dispatch(this.request());
			return Server.get(DiscoveryRedux.selector.root.user.fetch(getState(), uuid))
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
		branch: state => UserRedux.selector.branch(state).fetch,
		isLoading: state => UserFetchRedux.selector.branch(state).loading,
		getStatus: state => UserFetchRedux.selector.branch(state).status,
		getError: state => UserFetchRedux.selector.branch(state).error,
		getPayload: state => UserFetchRedux.selector.branch(state).payload,
	},
};

export default UserFetchRedux;
