import Axios from "axios";
import {createAction} from "redux-actions";
import {getUserLoginHref} from "redux/discovery/selector";
import {onLoading} from "redux/loading/action";

const
	onUserLoginRequest = createAction("ON_USER_LOGIN_REQUEST", () => ({status: "REQUEST", loading: true})),
	onUserLoginSuccess = createAction("ON_USER_LOGIN_SUCCESS", payload => ({status: "SUCCESS", loading: false, payload})),
	onUserLoginFailure = createAction("ON_USER_LOGIN_FAILURE", error => ({status: "FAILURE", loading: false, error})),
	onUserLoginDismiss = createAction("ON_USER_LOGIN_DISMISS", () => ({status: null, loading: false, error: null, payload: null})),
	onUserLogin = login => (dispatch, getState) => {
		dispatch(onLoading(true));
		dispatch(onUserLoginRequest());
		return Axios.post(getUserLoginHref(getState()), login)
			.then(({data}) => {
				dispatch(onUserLoginSuccess(data));
				dispatch(onLoading(false));
			})
			.catch(({response}) => {
				dispatch(onUserLoginFailure(response));
				dispatch(onLoading(false));
			});
	};

export {
	onUserLoginRequest,
	onUserLoginSuccess,
	onUserLoginFailure,
	onUserLoginDismiss,
	onUserLogin,
};
