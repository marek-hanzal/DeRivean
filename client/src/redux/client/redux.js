import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {LoadingRedux} from "redux/loading/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";

const actions = fetchActions("client");

const branch = state => state.client;

const ClientRedux = {
	fetch: href => dispatch => {
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
	},
	reducer: () => fetchReducer(actions),
};

/**
 * return current backend discovery url
 *
 * @param state
 * @returns {string}
 */
const selectDiscoveryLink = state => branch(state).payload.discovery;

const useClient = (
	onSuccess = data => ({}),
	onFailure = data => ({}),
	href = "/client.json"
) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(ClientRedux.fetch(href)).then(onSuccess, onFailure);
		// eslint-disable-next-line
	}, [dispatch, href]);
};

export {
	ClientRedux,
	useClient,
	selectDiscoveryLink,
};
