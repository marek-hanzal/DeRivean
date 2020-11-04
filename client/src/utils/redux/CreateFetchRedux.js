import {selectFetch} from "redux/discovery/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

function CreateFetchRedux(id, link, param = "{id}") {
	return {
		dispatch: {
			actions: fetchActions(`${id}.fetch`),
			fetch: function (uuid) {
				return (dispatch, getState) => {
					dispatch(this.actions.request());
					return Server.get(selectFetch(link, uuid, getState(), param))
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
		selector: fetchSelector(state => state[id].fetch),
	};
}

export default CreateFetchRedux;
