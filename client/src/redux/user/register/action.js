import Axios from "axios";
import {getUserCreateHref} from "redux/discovery/selector";
import {onLoading} from "redux/loading/action";
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
		dispatch(onLoading(true));
		dispatch(onUserRegisterRequest(register));
		return Axios.post(getUserCreateHref(getState()), register)
			.then(({data}) => {
				dispatch(onUserRegisterSuccess(data));
				dispatch(onLoading(false));
			})
			.catch(({response}) => {
				dispatch(onUserRegisterFailure(response.data));
				dispatch(onLoading(false));
			});
	};

export {
	onUserRegisterRequest,
	onUserRegisterSuccess,
	onUserRegisterFailure,
	onUserRegisterDismiss,
	onUserRegister,
};
