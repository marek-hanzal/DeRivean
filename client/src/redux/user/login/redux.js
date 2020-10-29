import DiscoveryRedux from "redux/discovery/redux";
import LoadingRedux from "redux/loading/redux";
import UserRedux from "redux/user/redux";
import {Server} from "server";
import dismissAction from "utils/action/actions/dismissAction";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

const actions = fetchActions("user.login");

const UserLoginRedux = {
	dismiss: dismissAction("user.login"),
	login: function (login) {
		return (dispatch, getState) => {
			dispatch(LoadingRedux.start());
			dispatch(actions.request());
			return Server.post(DiscoveryRedux.selector.public.user.login(getState()), login)
				.then(({data}) => {
					dispatch(actions.success(data));
					dispatch(LoadingRedux.finish());
					return Promise.resolve(data);
				})
				.catch(({response}) => {
					dispatch(actions.failure(response.data));
					dispatch(LoadingRedux.finish());
					return Promise.reject();
				});
		};
	},
	reducer: function () {
		return fetchReducer(actions, [
			this.dismiss,
		]);
	},
	selector: fetchSelector(state => UserRedux.selector.branch(state).login),
};

export default UserLoginRedux;
