import Axios from "axios";
import {createAction} from "redux-actions";
import {onClientStatus} from "redux/client/status/action";
import {onLoading} from "redux/loading/action";

const
	onClientRequest = createAction("ON_CLIENT_REQUEST", () => null),
	onClientSuccess = createAction("ON_CLIENT_SUCCESS", client => client),
	onClientFailure = createAction("ON_CLIENT_FAILURE", error => error),
	onClient = href => dispatch => {
		dispatch(onLoading(true));
		dispatch(onClientStatus("LOADING"));
		dispatch(onClientRequest());
		Axios.get(href)
			.then(response => {
				dispatch(onClientSuccess(response.data));
				dispatch(onClientStatus("SUCCESS"));
				dispatch(onLoading(false));
			})
			.catch(({response}) => {
				dispatch(onClientFailure(response));
				dispatch(onClientStatus("FAILURE"));
				dispatch(onLoading(false));
			});
	};

export {
	onClientRequest,
	onClientSuccess,
	onClientFailure,
	onClient,
};
