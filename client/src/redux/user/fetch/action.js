import Axios from "axios";
import {createAction} from "redux-actions";
import {getUserFetchHref} from "redux/discovery/selector";

const
	onUserFetchRequest = createAction("ON_USER_FETCH_REQUEST", () => ({status: "REQUEST", loading: true, error: null,})),
	onUserFetchSuccess = createAction("ON_USER_FETCH_SUCCESS", payload => ({status: "SUCCESS", error: null, payload, loading: false})),
	onUserFetchFailure = createAction("ON_USER_FETCH_FAILURE", error => ({status: "FAILURE", loading: false, error})),
	onUserFetchDismiss = createAction("ON_USER_FETCH_DISMISS", () => ({status: null, loading: false, error: null, payload: null})),
	onUserFetch = uuid => (dispatch, getState) => {
		dispatch(onUserFetchRequest());
		return Axios.get(getUserFetchHref(getState(), uuid))
			.then(({data}) => {
				dispatch(onUserFetchSuccess(data));
			})
			.catch(({response}) => {
				dispatch(onUserFetchFailure(response));
			});
	};

export {
	onUserFetchRequest,
	onUserFetchSuccess,
	onUserFetchFailure,
	onUserFetchDismiss,
	onUserFetch,
};
