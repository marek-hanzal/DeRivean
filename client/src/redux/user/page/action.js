import Axios from "axios";
import buildUrl from "build-url";
import {createAction} from "redux-actions";
import {getUserPageHref} from "redux/discovery/selector";

const
	onUserPageRequest = createAction("ON_USER_PAGE_REQUEST", () => ({status: "REQUEST", loading: true})),
	onUserPageSuccess = createAction("ON_USER_PAGE_SUCCESS", payload => ({status: "SUCCESS", loading: false, payload})),
	onUserPageFailure = createAction("ON_USER_PAGE_FAILURE", error => ({status: "FAILURE", loading: false, error})),
	onUserPage = (page, size = 100) => (dispatch, getState) => {
		dispatch(onUserPageRequest());
		return Axios.get(buildUrl(getUserPageHref(getState()).replace("{page}", page), {queryParams: {limit: size,}}))
			.then(({data}) => {
				dispatch(onUserPageSuccess(data));
			})
			.catch(({response}) => {
				dispatch(onUserPageFailure(response));
			});
	};

export {
	onUserPageRequest,
	onUserPageSuccess,
	onUserPageFailure,
	onUserPage,
};
