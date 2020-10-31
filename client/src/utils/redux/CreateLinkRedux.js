import DiscoveryRedux from "redux/discovery/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

function CreateLinkRedux(id, action, link) {
	return {
		dispatch: {
			actions: fetchActions(`${id}.${action}`),
			[action]: function () {
				return (dispatch, getState) => {
					dispatch(this.actions.request());
					return Server.get(DiscoveryRedux.selector.link(link, getState()))
						.then(({data}) => {
							dispatch(this.actions.success(data));
							return Promise.resolve(data);
						})
						.catch(({response}) => {
							dispatch(this.actions.failure(response.data));
							return Promise.reject(response.data);
						});
				};
			},
		},
		reducer: function () {
			return fetchReducer(this.dispatch.actions);
		},
		selector: fetchSelector(state => state[id][action])
	};
}

export default CreateLinkRedux;
