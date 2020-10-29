import DiscoveryRedux from "redux/discovery/redux";
import KingdomRedux from "redux/kingdom/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

const actions = fetchActions("kingdom.attributes");

const KingdomAttributesRedux = {
	fetch: function () {
		return (dispatch, getState) => {
			dispatch(actions.request());
			return Server.get(DiscoveryRedux.selector.root.kingdom.attributes(getState()))
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
	selector: fetchSelector(state => KingdomRedux.selector.branch(state).attributes),
};

export default KingdomAttributesRedux;
