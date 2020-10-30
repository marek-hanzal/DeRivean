import BuildingRedux from "redux/building/redux";
import DiscoveryRedux from "redux/discovery/redux";
import LoadingRedux from "redux/loading/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

const actions = fetchActions("building.create");

const BuildingCreateRedux = {
	create: function (building) {
		return (dispatch, getState) => {
			dispatch(LoadingRedux.start());
			dispatch(actions.request());
			return Server.post(DiscoveryRedux.selector.root.building.create(getState()), building)
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
	reducer: () => fetchReducer(actions),
	selector: fetchSelector(state => BuildingRedux.selector.branch(state).create)
};

export default BuildingCreateRedux;
