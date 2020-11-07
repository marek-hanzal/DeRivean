import axios from "axios";
import {selectLink} from "redux/discovery/redux";
import {SessionRedux} from "redux/session/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

function CreateLinkRedux(id, action, link) {
	return {
		dispatch: {
			actions: fetchActions(`${id}.${action}`),
			[action]: function (cancelToken = null) {
				return (dispatch, getState) => {
					dispatch(this.actions.request());
					return Server.get(selectLink(link, getState()), {
						cancelToken: (cancelToken || axios.CancelToken.source()).token,
						headers: {Authorization: `Bearer ${SessionRedux.selector.getUser(getState()).token}`}
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
		},
		reducer: function () {
			return fetchReducer(this.dispatch.actions);
		},
		selector: fetchSelector(state => state[id][action])
	};
}

export default CreateLinkRedux;
