import DiscoveryRedux from "redux/discovery/redux";
import KingdomRedux from "redux/kingdom/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

const actions = fetchActions("kingdom.fetch");

const KingdomFetchRedux = {
	fetch: function (uuid) {
		return (dispatch, getState) => {
			dispatch(actions.request());
			return Server.get(DiscoveryRedux.selector.root.kingdom.fetch(getState(), uuid))
				.then(({data}) => {
					dispatch(actions.success(data));
					return Promise.resolve(data);
				})
				.catch(({response}) => {
					dispatch(actions.failure(response));
					return Promise.reject(response.data);
				});
		};
	},
	reducer: () => fetchReducer(actions),
	selector: fetchSelector(state => KingdomRedux.selector.branch(state).fetch)
};

export default KingdomFetchRedux;
