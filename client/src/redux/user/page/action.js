import Axios from "axios";
import buildUrl from "build-url";
import DiscoverySelector from "redux/discovery/selector";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import defaultPage from "utils/page";

const
	onUserPageRequest = requestAction("user.page", defaultPage),
	onUserPageSuccess = successAction("user.page"),
	onUserPageFailure = failureAction("user.page"),
	onUserPage = (page, size = 100) => (dispatch, getState) => {
		dispatch(onUserPageRequest());
		return Axios.get(buildUrl(DiscoverySelector.root.user.page(getState(), page), {queryParams: {limit: size,}}))
			.then(({data}) => {
				dispatch(onUserPageSuccess(data));
			})
			.catch(({response}) => {
				dispatch(onUserPageFailure(response));
			});
	};

export {
	onUserPageRequest,
	onUserPageSuccess,
	onUserPageFailure,
	onUserPage,
};
