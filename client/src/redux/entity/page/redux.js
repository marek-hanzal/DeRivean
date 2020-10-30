import buildUrl from "build-url";
import DiscoveryRedux from "redux/discovery/redux";
import Entity from "redux/entity/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";
import defaultPage from "utils/page";

const actions = fetchActions("entity.page");

const EntityPageRedux = {
	fetch: function (page, size = 100) {
		return (dispatch, getState) => {
			dispatch(actions.request());
			return Server.get(buildUrl(DiscoveryRedux.selector.root.entity.page(getState(), page), {queryParams: {limit: size.toString(),}}))
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
	reducer: () => fetchReducer(actions, [], defaultPage),
	selector: fetchSelector(state => Entity.selector.branch(state).page),
};

export default EntityPageRedux;
