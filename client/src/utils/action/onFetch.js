import Loading from "redux/loading/action";
import {Server} from "server";

const onFetch = (href, onRequest, onSuccess, onFailure) => dispatch => {
	dispatch(Loading.start());
	dispatch(onRequest());
	return Server.get(href)
		.then(({data}) => {
			dispatch(onSuccess(data));
			dispatch(Loading.finish());
		})
		.catch(({response}) => {
			dispatch(onFailure(response));
			dispatch(Loading.finish());
		});
};

export default onFetch;
