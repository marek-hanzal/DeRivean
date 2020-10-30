import DiscoveryRedux from "redux/discovery/redux";
import UserRedux from "redux/user/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

const actions = fetchActions("user.fetch");

const UserFetchRedux = {
	fetch: function (uuid) {
		return (dispatch, getState) => {
			dispatch(actions.request());
			return Server.get(DiscoveryRedux.selector.root.user.fetch(getState(), uuid))
				.then(({data}) => {
					dispatch(actions.success(data));
					return Promise.resolve(data);
				})
				.catch(({response}) => {
					dispatch(actions.failure(response.data));
					return Promise.reject(response.data);
				});
		};
	},
	reducer: () => fetchReducer(actions),
	selector: fetchSelector(state => UserRedux.selector.branch(state).fetch),
};

export default UserFetchRedux;
