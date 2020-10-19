import Axios from "axios";
import {createAction} from "redux-actions";
import {getUserLoginHref} from "redux/discovery/payload/selector";
import {onSessionOpen} from "redux/session/action";

const
	onUserLoginRequest = createAction("ON_USER_LOGIN_REQUEST", () => ({status: "REQUEST"})),
	onUserLoginSuccess = createAction("ON_USER_LOGIN_SUCCESS", user => ({status: "SUCCESS", user})),
	onUserLoginFailure = createAction("ON_USER_LOGIN_FAILURE", error => ({status: "FAILURE", error})),
	onUserLoginDismiss = createAction("ON_USER_LOGIN_DISMISS", () => ({status: null, error: null, user: null})),
	onUserLogin = login => (dispatch, getState) => {
		dispatch(onUserLoginRequest());
		Axios.post(getUserLoginHref(getState()), login)
			.then(response => {
				dispatch(onUserLoginSuccess(response.data));
				dispatch(onSessionOpen(response.data, response.data.site));
			})
			.catch(({response}) => dispatch(onUserLoginFailure(response)));
	};

export {
	onUserLoginRequest,
	onUserLoginSuccess,
	onUserLoginFailure,
	onUserLoginDismiss,
	onUserLogin,
};
