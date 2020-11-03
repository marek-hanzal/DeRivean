import {selectLink} from "redux/discovery/redux";
import {LoadingRedux} from "redux/loading/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";
import fetchSelector from "utils/action/fetchSelector";

function CreateActionRedux(id, action, link, extra = {}) {
	return {
		dispatch: {
			actions: fetchActions(`${id}.${action}`),
			[action]: function (data) {
				return (dispatch, getState) => {
					dispatch(LoadingRedux.start());
					dispatch(this.actions.request());
					return Server.post(selectLink(link, getState()), data)
						.then(({data}) => {
							dispatch(this.actions.success(data));
							dispatch(LoadingRedux.finish());
							return Promise.resolve(data);
						})
						.catch(({response}) => {
							dispatch(this.actions.failure(response.data));
							dispatch(LoadingRedux.finish());
							return Promise.reject(response.data);
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

export default CreateActionRedux;
