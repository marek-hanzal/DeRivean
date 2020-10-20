import Axios from "axios";
import {createAction} from "redux-actions";
import {getUserCreateHref} from "redux/discovery/payload/selector";
import {onLoading} from "redux/loading/action";

const
	onUserRegisterRequest = createAction("ON_USER_REGISTER_REQUEST", request => ({status: "REQUEST", request})),
	onUserRegisterSuccess = createAction("ON_USER_REGISTER_SUCCESS", register => ({status: "SUCCESS", register})),
	onUserRegisterFailure = createAction("ON_USER_REGISTER_FAILURE", error => ({status: "FAILURE", error})),
	onUserRegisterDismiss = createAction("ON_USER_REGISTER_DISMISS", () => ({status: null, error: null, register: null, request: null})),
	onUserRegister = register => (dispatch, getState) => {
		dispatch(onLoading(true));
		dispatch(onUserRegisterRequest(register));
		return Axios.post(getUserCreateHref(getState()), register)
			.then(response => {
				dispatch(onUserRegisterSuccess(response.data));
				dispatch(onLoading(false));
			})
			.catch(({response}) => {
				dispatch(onUserRegisterFailure(response));
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
