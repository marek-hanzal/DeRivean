import axios from "axios";
import {selectFetch} from "redux/discovery/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

function CreateFetchRedux(id, link, param = "{id}") {
	return {
		dispatch: {
			actions: fetchActions(`${id}.fetch`),
			fetch: function (uuid, cancelToken = null) {
				return (dispatch, getState) => {
					dispatch(this.actions.request());
					return Server.get(selectFetch(link, uuid, getState(), param, {
						cancelToken: (cancelToken || axios.CancelToken.source()).token,
					}))
						.then(({data}) => {
							dispatch(this.actions.success(data));
							return Promise.resolve(data);
						})
						.catch(error => {
							if (axios.isCancel(error)) {
								return Promise.reject({cancel: true});
							}
							dispatch(this.actions.failure(error.response.data));
							return Promise.reject(error.response.data);
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
