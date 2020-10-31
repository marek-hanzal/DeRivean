import LoadingRedux from "redux/loading/redux";
import {Server} from "server";

const onFetch = (href, actions) => dispatch => {
	dispatch(LoadingRedux.start());
	dispatch(actions.request());
	return Server.get(href)
		.then(({data}) => {
			dispatch(actions.success(data));
			dispatch(LoadingRedux.finish());
			return Promise.resolve(data);
		})
		.catch(({response}) => {
			dispatch(actions.failure(response.data));
			dispatch(LoadingRedux.finish());
			return Promise.reject(response.data);
		});
};

export default onFetch;
