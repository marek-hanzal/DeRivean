import {onLoading} from "redux/loading/action";
import {Server} from "server";

const onFetch = (href, onRequest, onSuccess, onFailure) => dispatch => {
		dispatch(onLoading(true));
		dispatch(onRequest());
		return Server.get(href)
			.then(({data}) => {
				dispatch(onSuccess(data));
				dispatch(onLoading(false));
			})
			.catch(({response}) => {
				dispatch(onFailure(response));
				dispatch(onLoading(false));
			});
	}
;

export default onFetch;
