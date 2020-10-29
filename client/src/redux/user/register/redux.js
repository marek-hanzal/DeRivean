import DiscoveryRedux from "redux/discovery/redux";
import LoadingRedux from "redux/loading/redux";
import UserRedux from "redux/user/redux";
import {Server} from "server";
import dismissAction from "utils/action/actions/dismissAction";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

const actions = fetchActions("user.register");

const UserRegisterRedux = {
	dismiss: dismissAction("user.register"),
	register: function (register) {
		return (dispatch, getState) => {
			dispatch(LoadingRedux.start());
			dispatch(actions.request(register));
			return Server.post(DiscoveryRedux.selector.public.user.register(getState()), register)
				.then(({data}) => {
					dispatch(actions.success(data));
					dispatch(LoadingRedux.finish());
					return Promise.resolve(data);
				})
				.catch(({response}) => {
					dispatch(actions.failure(response.data));
					dispatch(LoadingRedux.finish());
					return Promise.reject(response.data);
				});
		};
	},
	reducer: function () {
		return fetchReducer(actions, [
			this.dismiss,
		]);
	},
	selector: fetchSelector(state => UserRedux.selector.branch(state).register),
};

export default UserRegisterRedux;
