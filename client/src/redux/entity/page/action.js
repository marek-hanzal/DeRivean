import Axios from "axios";
import buildUrl from "build-url";
import DiscoverySelector from "redux/discovery/selector";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";
import defaultPage from "utils/page";

const
	onEntityPageRequest = requestAction("entity.page", defaultPage),
	onEntityPageSuccess = successAction("entity.page"),
	onEntityPageFailure = failureAction("entity.page"),
	onEntityPage = (page, size = 100) => (dispatch, getState) => {
		dispatch(onEntityPageRequest());
		return Axios.get(buildUrl(DiscoverySelector.root.entity.page(getState(), page), {queryParams: {limit: size,}}))
			.then(({data}) => {
				dispatch(onEntityPageSuccess(data));
			})
			.catch(({response}) => {
				dispatch(onEntityPageFailure(response));
			});
	};

export {
	onEntityPageRequest,
	onEntityPageSuccess,
	onEntityPageFailure,
	onEntityPage,
};
