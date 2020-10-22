import Axios from "axios";
import {getUserFetchHref} from "redux/discovery/selector";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";

const
	onUserFetchRequest = requestAction("user.fetch"),
	onUserFetchSuccess = successAction("user.fetch"),
	onUserFetchFailure = failureAction("user.fetch"),
	onUserFetch = uuid => (dispatch, getState) => {
		dispatch(onUserFetchRequest());
		return Axios.get(getUserFetchHref(getState(), uuid))
			.then(({data}) => {
				dispatch(onUserFetchSuccess(data));
			})
			.catch(({response}) => {
				dispatch(onUserFetchFailure(response));
			});
	};

export {
	onUserFetchRequest,
	onUserFetchSuccess,
	onUserFetchFailure,
	onUserFetch,
};
