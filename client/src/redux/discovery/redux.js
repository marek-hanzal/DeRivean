import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectDiscoveryLink} from "redux/client/redux";
import LoadingRedux from "redux/loading/redux";
import {Server} from "server";
import fetchActions from "utils/action/actions/fetchActions";
import fetchReducer from "utils/action/fetchReducer";

const actions = fetchActions("discovery");
const branch = state => state.discovery;

const DiscoveryRedux = {
	fetch: href => dispatch => {
		dispatch(LoadingRedux.start());
		dispatch(actions.request());
		return Server.get(href)
			.then(({data}) => {
				dispatch(actions.success(data));
				dispatch(LoadingRedux.finish());
				return Promise.resolve(data);
			})
			.catch(error => {
				dispatch(actions.failure({...error}));
				dispatch(LoadingRedux.finish());
				return Promise.reject(error);
			});
	},
	reducer: () => fetchReducer(actions),
};

const useDiscovery = (
	onSuccess = ({}),
	onFailure = ({}),
) => {
	const dispatch = useDispatch();
	const href = useSelector(selectDiscoveryLink);
	useEffect(() => {
		dispatch(DiscoveryRedux.fetch(href)).then(onSuccess, onFailure);
	}, [dispatch, href, onFailure, onSuccess]);
};

function selectLink(id, state) {
	return branch(state).payload[id].link;
}

function selectFetch(id, uuid, state) {
	return selectLink(id, state).replace("{id}", uuid);
}

function selectPage(id, state, page, name = null, param = null) {
	return name ? selectLink(id, state).replace("{" + name + "}", param).replace("{page}", page) : selectLink(id, state).replace("{page}", page);
}

export {
	DiscoveryRedux,
	useDiscovery,
	selectLink,
	selectFetch,
	selectPage,
};
