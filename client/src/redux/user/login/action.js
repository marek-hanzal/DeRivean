import Axios from "axios";
import {getUserLoginHref} from "redux/discovery/selector";
import {onLoading} from "redux/loading/action";
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
		dispatch(onLoading(true));
		dispatch(onUserLoginRequest());
		return Axios.post(getUserLoginHref(getState()), login)
			.then(({data}) => {
				dispatch(onUserLoginSuccess(data));
				dispatch(onLoading(false));
			})
			.catch(({response}) => {
				dispatch(onUserLoginFailure(response.data));
				dispatch(onLoading(false));
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
