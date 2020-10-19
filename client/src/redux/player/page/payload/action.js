import Axios from "axios";
import buildUrl from "build-url";
import {createAction} from "redux-actions";
import {getPlayerPageHref} from "redux/discovery/payload/selector";
import {onPlayerPageStatus} from "redux/player/page/status/action";

const
	onPlayerPageRequest = createAction("ON_PLAYER_PAGE_REQUEST", () => null),
	onPlayerPageSuccess = createAction("ON_PLAYER_PAGE_SUCCESS", pages => pages),
	onPlayerPageFailure = createAction("ON_PLAYER_PAGE_FAILURE", error => error),
	onPlayerPage = (page, size = 100) => (dispatch, getState) => {
		dispatch(onPlayerPageStatus("LOADING"));
		dispatch(onPlayerPageRequest());
		return Axios.get(buildUrl(getPlayerPageHref(getState()).replace("{page}", page), {
			queryParams: {
				limit: size,
			}
		}))
			.then(response => {
				dispatch(onPlayerPageSuccess(response.data));
				dispatch(onPlayerPageStatus("SUCCESS"));
			})
			.catch(({response}) => {
				dispatch(onPlayerPageFailure(response));
				dispatch(onPlayerPageStatus("FAILURE"));
			});
	};

export {
	onPlayerPageRequest,
	onPlayerPageSuccess,
	onPlayerPageFailure,
	onPlayerPage,
};
