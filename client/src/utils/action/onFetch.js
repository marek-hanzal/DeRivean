import LoadingRedux from "redux/loading/redux";
import {Server} from "server";

const onFetch = (href, actions) => dispatch => {
	dispatch(LoadingRedux.start());
	dispatch(actions.request());
	return Server.get(href)
		.then(({data}) => {
			dispatch(actions.success(data));
			dispatch(LoadingRedux.finish());
		})
		.catch(({response}) => {
			dispatch(actions.failure(response.data));
			dispatch(LoadingRedux.finish());
		});
};

export default onFetch;
