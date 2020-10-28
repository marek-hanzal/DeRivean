import Axios from "axios";
import DiscoverySelector from "redux/discovery/selector";
import Loading from "redux/loading/action";
import dismissAction from "utils/action/actions/dismissAction";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";

const
	onUserRegisterRequest = requestAction("user.register"),
	onUserRegisterSuccess = successAction("user.register"),
	onUserRegisterFailure = failureAction("user.register"),
	onUserRegisterDismiss = dismissAction("user.register"),
	onUserRegister = register => (dispatch, getState) => {
		dispatch(Loading.start());
		dispatch(onUserRegisterRequest(register));
		return Axios.post(DiscoverySelector.public.user.register(getState()), register)
			.then(({data}) => {
				dispatch(onUserRegisterSuccess(data));
				dispatch(Loading.finish());
			})
			.catch(({response}) => {
				dispatch(onUserRegisterFailure(response.data));
				dispatch(Loading.finish());
			});
	};

export {
	onUserRegisterRequest,
	onUserRegisterSuccess,
	onUserRegisterFailure,
	onUserRegisterDismiss,
	onUserRegister,
};
