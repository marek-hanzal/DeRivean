import DiscoveryRedux from "redux/discovery/redux";
import LoadingRedux from "redux/loading/redux";
import UserRedux from "redux/user/redux";
import {Server} from "server";
import dismissAction from "utils/action/actions/dismissAction";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import reducerActions from "utils/action/reducerActions";

const UserRegisterRedux = {
	request: requestAction("user.register"),
	success: successAction("user.register"),
	failure: failureAction("user.register"),
	dismiss: dismissAction("user.register"),
	register: function (register) {
		return (dispatch, getState) => {
			dispatch(LoadingRedux.start());
			dispatch(this.request(register));
			return Server.post(DiscoveryRedux.selector.public.user.register(getState()), register)
				.then(({data}) => {
					dispatch(this.success(data));
					dispatch(LoadingRedux.finish());
				})
				.catch(({response}) => {
					dispatch(this.failure(response.data));
					dispatch(LoadingRedux.finish());
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
		branch: state => UserRedux.selector.branch(state).register,
		isLoading: state => UserRegisterRedux.selector.branch(state).loading,
		getStatus: state => UserRegisterRedux.selector.branch(state).status,
		getError: state => UserRegisterRedux.selector.branch(state).error,
		getPayload: state => UserRegisterRedux.selector.branch(state).payload,
	},
};

export default UserRegisterRedux;
