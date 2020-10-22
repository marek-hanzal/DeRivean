import Axios from "axios";
import {createAction} from "redux-actions";
import {getDiscoveryHref} from "redux/client/selector";
import {onLoading} from "redux/loading/action";

const
	onDiscoveryRequest = createAction("ON_DISCOVERY_REQUEST", () => ({status: "REQUEST", loading: true, error: null,})),
	onDiscoverySuccess = createAction("ON_DISCOVERY_SUCCESS", payload => ({status: "SUCCESS", loading: false, error: null, payload})),
	onDiscoveryFailure = createAction("ON_DISCOVERY_FAILURE", error => ({status: "FAILURE", loading: false, error})),
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
