import axios from "axios";
import {selectLink} from "redux/discovery/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

function CreatePostRedux(id, action, link, extra = {}) {
	return {
		dispatch: {
			actions: fetchActions(`${id}.${action}`),
			[action]: function (data, cancelToken = null) {
				return (dispatch, getState) => {
					dispatch(this.actions.request());
					return Server.post(selectLink(link, getState()), data, {
						cancelToken: (cancelToken || axios.CancelToken.source()).token,
					})
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
			...extra
		},
		reducer: function () {
			return fetchReducer(this.dispatch.actions, Object.values(extra));
		},
		selector: fetchSelector(state => state[id][action])
	};
}

export default CreatePostRedux;
