import axios from "axios";
import buildUrl from "build-url";
import {selectPage} from "redux/discovery/redux";
import {SessionRedux} from "redux/session/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";
import defaultPage from "utils/page";

function CreatePageRedux(id, link) {
	return {
		dispatch: {
			actions: fetchActions(`${id}.page`),
			page: function (page, size, name = null, param = null, cancelToken = null) {
				return (dispatch, getState) => {
					dispatch(this.actions.request());
					return Server.get(buildUrl(selectPage(link, getState(), page, name, param), {queryParams: {limit: size.toString()}}), {
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
			return fetchReducer(this.dispatch.actions, [], defaultPage);
		},
		selector: fetchSelector(state => state[id].page),
	};
}

export default CreatePageRedux;
