import Axios from "axios";
import {createAction} from "redux-actions";
import {onUserRegisterStatus} from "redux/user/registerStatus/action";

const
	onUserRegisterRequest = createAction("ON_USER_REGISTER_REQUEST", () => null),
	onUserRegisterSuccess = createAction("ON_USER_REGISTER_SUCCESS", register => register),
	onUserRegisterFailure = createAction("ON_USER_REGISTER_FAILURE", error => error),
	onUserRegister = register => (dispatch, getState) => {
		alert(JSON.stringify(register));
		// const href = buildUrl(getUserCreateHref(getState()).replace("{page}", page), {
		// });
		const href = "nope";
		dispatch(onUserRegisterStatus("LOADING"));
		dispatch(onUserRegisterRequest());
		Axios.get(href)
			.then(response => {
				dispatch(onUserRegisterSuccess(response.data));
				dispatch(onUserRegisterStatus("SUCCESS"));
			})
			.catch(error => {
				dispatch(onUserRegisterFailure(error));
				dispatch(onUserRegisterStatus("FAILURE"));
			});
	};

export {
	onUserRegisterRequest,
	onUserRegisterSuccess,
	onUserRegisterFailure,
	onUserRegister,
};
