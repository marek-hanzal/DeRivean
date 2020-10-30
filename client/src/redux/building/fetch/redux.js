import BuildingRedux from "redux/building/redux";
import DiscoveryRedux from "redux/discovery/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

const actions = fetchActions("building.fetch");

const BuildingFetchRedux = {
	fetch: function (uuid) {
		return (dispatch, getState) => {
			dispatch(actions.request());
			return Server.get(DiscoveryRedux.selector.root.building.fetch(getState(), uuid))
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
	selector: fetchSelector(state => BuildingRedux.selector.branch(state).fetch)
};

export default BuildingFetchRedux;
