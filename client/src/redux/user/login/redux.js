import DiscoveryRedux from "redux/discovery/redux";
import LoadingRedux from "redux/loading/redux";
import UserRedux from "redux/user/redux";
import {Server} from "server";
import dismissAction from "utils/action/actions/dismissAction";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";

const UserLoginRedux = {
	request: requestAction("user.login"),
	success: successAction("user.login"),
	failure: failureAction("user.login"),
	dismiss: dismissAction("user.login"),
	login: function (login) {
		return (dispatch, getState) => {
			dispatch(LoadingRedux.start());
			dispatch(this.request());
			return Server.post(DiscoveryRedux.selector.public.user.login(getState()), login)
				.then(({data}) => {
					dispatch(this.success(data));
					dispatch(LoadingRedux.finish());
				})
				.catch(({response}) => {
					dispatch(this.failure(response.data));
					dispatch(LoadingRedux.finish());
					return Promise.reject();
				});
		};
	},
	reducer: function () {
		return reducerActions([
			this.request,
			this.success,
			this.failure,
			this.dismiss,
		]);
	},
	selector: {
		branch: state => UserRedux.selector.branch(state).login,
		isLoading: state => UserLoginRedux.selector.branch(state).loading,
		getStatus: state => UserLoginRedux.selector.branch(state).status,
		getError: state => UserLoginRedux.selector.branch(state).error,
		getPayload: state => UserLoginRedux.selector.branch(state).payload,
	},
};

export default UserLoginRedux;
