import LoadingRedux from "redux/loading/redux";
import {Server} from "server";

const onFetch = (href, onRequest, onSuccess, onFailure) => dispatch => {
	dispatch(LoadingRedux.start());
	dispatch(onRequest());
	return Server.get(href)
		.then(({data}) => {
			dispatch(onSuccess(data));
			dispatch(LoadingRedux.finish());
		})
		.catch(({response}) => {
			dispatch(onFailure(response));
			dispatch(LoadingRedux.finish());
		});
};

export default onFetch;
