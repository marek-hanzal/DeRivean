import Axios from "axios";
import {getDiscoveryHref} from "redux/client/selector";
import {onLoading} from "redux/loading/action";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";

const
	onDiscoveryRequest = requestAction("discovery"),
	onDiscoverySuccess = successAction("discovery"),
	onDiscoveryFailure = failureAction("discovery"),
	onDiscovery = () => (dispatch, getState) => {
		dispatch(onLoading(true));
		dispatch(onDiscoveryRequest());
		return Axios.get(getDiscoveryHref(getState()))
			.then(({data}) => {
				dispatch(onDiscoverySuccess(data));
				dispatch(onLoading(false));
			})
			.catch(error => {
				dispatch(onDiscoveryFailure({...error}));
				dispatch(onLoading(false));
			});
	};

export {
	onDiscoveryRequest,
	onDiscoverySuccess,
	onDiscoveryFailure,
	onDiscovery,
};
