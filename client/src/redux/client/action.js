import Axios from "axios";
import {createAction} from "redux-actions";
import {onLoading} from "redux/loading/action";

const
	onClientRequest = createAction("ON_CLIENT_REQUEST", () => ({status: "REQUEST", loading: true})),
	onClientSuccess = createAction("ON_CLIENT_SUCCESS", payload => ({status: "SUCCESS", loading: false, payload})),
	onClientFailure = createAction("ON_CLIENT_FAILURE", error => ({status: "FAILURE", loading: false, error})),
	onClient = href => dispatch => {
		dispatch(onLoading(true));
		dispatch(onClientRequest());
		return Axios.get(href)
			.then(({data}) => {
				dispatch(onClientSuccess(data));
				dispatch(onLoading(false));
			})
			.catch(({response}) => {
				dispatch(onClientFailure(response));
				dispatch(onLoading(false));
			});
	};

export {
	onClientRequest,
	onClientSuccess,
	onClientFailure,
	onClient,
};
