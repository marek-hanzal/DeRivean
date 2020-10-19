import Axios from "axios";
import {createAction} from "redux-actions";
import {getUserCreateHref} from "redux/discovery/payload/selector";

const
	onUserRegisterRequest = createAction("ON_USER_REGISTER_REQUEST", () => ({status: "REQUEST"})),
	onUserRegisterSuccess = createAction("ON_USER_REGISTER_SUCCESS", register => ({status: "SUCCESS", register})),
	onUserRegisterFailure = createAction("ON_USER_REGISTER_FAILURE", error => ({status: "FAILURE", error})),
	onUserRegisterDismiss = createAction("ON_USER_REGISTER_DISMISS", () => ({status: null, error: null, register: null})),
	onUserRegister = register => (dispatch, getState) => {
		dispatch(onUserRegisterRequest());
		Axios.post(getUserCreateHref(getState()), register)
			.then(response => dispatch(onUserRegisterSuccess(response.data)))
			.catch(({response}) => dispatch(onUserRegisterFailure(response)));
	};

export {
	onUserRegisterRequest,
	onUserRegisterSuccess,
	onUserRegisterFailure,
	onUserRegisterDismiss,
	onUserRegister,
};
