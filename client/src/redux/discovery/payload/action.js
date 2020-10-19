import Axios from "axios";
import {createAction} from "redux-actions";
import {getDiscoveryHref} from "redux/client/payload/selector";
import {onDiscoveryStatus} from "redux/discovery/status/action";
import {onLoading} from "redux/loading/action";

const
	onDiscoveryRequest = createAction("ON_DISCOVERY_REQUEST", () => null),
	onDiscoverySuccess = createAction("ON_DISCOVERY_SUCCESS", discovery => discovery),
	onDiscoveryFailure = createAction("ON_DISCOVERY_FAILURE", error => error),
	onDiscovery = () => (dispatch, getState) => {
		dispatch(onLoading(true));
		dispatch(onDiscoveryStatus("LOADING"));
		dispatch(onDiscoveryRequest());
		return Axios.get(getDiscoveryHref(getState()))
			.then(response => {
				dispatch(onDiscoverySuccess(response.data));
				dispatch(onDiscoveryStatus("SUCCESS"));
				dispatch(onLoading(false));
			})
			.catch(({response}) => {
				dispatch(onDiscoveryFailure(response));
				dispatch(onDiscoveryStatus("FAILURE"));
				dispatch(onLoading(false));
			});
	};

export {
	onDiscoveryRequest,
	onDiscoverySuccess,
	onDiscoveryFailure,
	onDiscovery,
};
