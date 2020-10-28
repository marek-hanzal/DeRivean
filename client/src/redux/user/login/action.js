import Axios from "axios";
import DiscoverySelector from "redux/discovery/selector";
import Loading from "redux/loading/action";
import dismissAction from "utils/action/actions/dismissAction";
import failureAction from "utils/action/actions/failureAction";
import requestAction from "utils/action/actions/requestAction";
import successAction from "utils/action/actions/successAction";

const
	onUserLoginRequest = requestAction("user.login"),
	onUserLoginSuccess = successAction("user.login"),
	onUserLoginFailure = failureAction("user.login"),
	onUserLoginDismiss = dismissAction("user.login"),
	onUserLogin = login => (dispatch, getState) => {
		dispatch(Loading.start());
		dispatch(onUserLoginRequest());
		return Axios.post(DiscoverySelector.public.user.login(getState()), login)
			.then(({data}) => {
				dispatch(onUserLoginSuccess(data));
				dispatch(Loading.finish());
			})
			.catch(({response}) => {
				dispatch(onUserLoginFailure(response.data));
				dispatch(Loading.finish());
				return Promise.reject();
			});
	};

export {
	onUserLoginRequest,
	onUserLoginSuccess,
	onUserLoginFailure,
	onUserLoginDismiss,
	onUserLogin,
};
