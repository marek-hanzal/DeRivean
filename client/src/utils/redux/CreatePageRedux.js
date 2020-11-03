import buildUrl from "build-url";
import {selectPage} from "redux/discovery/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";
import defaultPage from "utils/page";

function CreatePageRedux(id, link) {
	return {
		dispatch: {
			actions: fetchActions(`${id}.page`),
			page: function (page, size, name = null, param = null) {
				return (dispatch, getState) => {
					dispatch(this.actions.request());
					return Server.get(buildUrl(selectPage(link, getState(), page, name, param), {queryParams: {limit: size.toString()}}))
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
			return fetchReducer(this.dispatch.actions, [], defaultPage);
		},
		selector: fetchSelector(state => state[id].page),
	};
}

export default CreatePageRedux;
