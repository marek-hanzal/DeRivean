import Axios from "axios";
import buildUrl from "build-url";
import {createAction} from "redux-actions";
import {getEntityPageHref} from "redux/discovery/selector";

const
	onEntityPageRequest = createAction("ON_ENTITY_PAGE_REQUEST", () => ({status: "REQUEST", loading: true})),
	onEntityPageSuccess = createAction("ON_ENTITY_PAGE_SUCCESS", payload => ({status: "SUCCESS", loading: false, payload})),
	onEntityPageFailure = createAction("ON_ENTITY_PAGE_FAILURE", error => ({status: "FAILURE", loading: false, error})),
	onEntityPage = (page, size = 100) => (dispatch, getState) => {
		dispatch(onEntityPageRequest());
		return Axios.get(buildUrl(getEntityPageHref(getState()).replace("{page}", page), {queryParams: {limit: size,}}))
			.then(({data}) => {
				dispatch(onEntityPageSuccess(data));
			})
			.catch(({response}) => {
				dispatch(onEntityPageFailure(response));
			});
	};

export {
	onEntityPageRequest,
	onEntityPageSuccess,
	onEntityPageFailure,
	onEntityPage,
};
