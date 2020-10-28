import Axios from "axios";
import buildUrl from "build-url";
import DiscoveryRedux from "redux/discovery/redux";
import UserRedux from "redux/user/redux";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";
import defaultPage from "utils/page";

const UserPageRedux = {
	request: requestAction("user.page", defaultPage),
	success: successAction("user.page"),
	failure: failureAction("user.page"),
	fetch: function (page, size = 100) {
		return (dispatch, getState) => {
			dispatch(this.request());
			return Axios.get(buildUrl(DiscoveryRedux.selector.root.user.page(getState(), page), {queryParams: {limit: size.toString(),}}))
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
		branch: state => UserRedux.selector.branch(state).page,
		isLoading: state => UserPageRedux.selector.branch(state).loading,
		getPayload: state => UserPageRedux.selector.branch(state).payload,
	},
};

export default UserPageRedux;
