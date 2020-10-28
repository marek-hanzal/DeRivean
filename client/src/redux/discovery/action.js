import Axios from "axios";
import Loading from "redux/loading/action";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";

const
	onDiscoveryRequest = requestAction("discovery"),
	onDiscoverySuccess = successAction("discovery"),
	onDiscoveryFailure = failureAction("discovery"),
	onDiscovery = href => dispatch => {
		dispatch(Loading.start());
		dispatch(onDiscoveryRequest());
		return Axios.get(href)
			.then(({data}) => {
				dispatch(onDiscoverySuccess(data));
				dispatch(Loading.finish());
			})
			.catch(error => {
				dispatch(onDiscoveryFailure({...error}));
				dispatch(Loading.finish());
			});
	};

export {
	onDiscoveryRequest,
	onDiscoverySuccess,
	onDiscoveryFailure,
	onDiscovery,
};
