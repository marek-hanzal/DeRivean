import Axios from "axios";
import buildUrl from "build-url";
import {createAction} from "redux-actions";
import {getEntityPageHref} from "redux/discovery/selector";
import {onEntityPageStatus} from "redux/entity/page/status/action";

const
	onEntityPageRequest = createAction("ON_ENTITY_PAGE_REQUEST", () => null),
	onEntityPageSuccess = createAction("ON_ENTITY_PAGE_SUCCESS", pages => pages),
	onEntityPageFailure = createAction("ON_ENTITY_PAGE_FAILURE", error => error),
	onEntityPage = (page, size = 100) => (dispatch, getState) => {
		dispatch(onEntityPageStatus("LOADING"));
		dispatch(onEntityPageRequest());
		return Axios.get(buildUrl(getEntityPageHref(getState()).replace("{page}", page), {
			queryParams: {
				limit: size,
			}
		}))
			.then(response => {
				dispatch(onEntityPageSuccess(response.data));
				dispatch(onEntityPageStatus("SUCCESS"));
			})
			.catch(({response}) => {
				dispatch(onEntityPageFailure(response));
				dispatch(onEntityPageStatus("FAILURE"));
			});
	};

export {
	onEntityPageRequest,
	onEntityPageSuccess,
	onEntityPageFailure,
	onEntityPage,
};
