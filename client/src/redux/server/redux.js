import axios from "axios";
import {useEffect} from "react";
import {useDispatch, useStore} from "react-redux";
import {selectLink} from "redux/discovery/redux";
import {Server} from "server";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateRedux from "utils/redux/CreateRedux";

const ServerRedux = CreateRedux({
	validate: CreateLinkRedux("server", "validate", "root.server.validate"),
	sites: CreateLinkRedux("server", "sites", "root.server.sites"),
});

const useServerSites = (
	onSuccess = sites => null,
	onError = error => null,
) => {
	const dispatch = useDispatch();
	const cancelToken = axios.CancelToken.source();
	useEffect(() => {
		dispatch(ServerRedux.redux.sites.dispatch.sites(cancelToken)).then(onSuccess, onError);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [dispatch]);
};

const useServerValidate = (
	onSuccess = validation => null,
	onError = error => null,
) => {
	const store = useStore();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		Server.get(selectLink("root.server.validate", store.getState()), {
			cancelToken: cancelToken.token,
		})
			.then(({data}) => {
				onSuccess(data);
			})
			.catch(error => {
				if (axios.isCancel(error)) {
					return Promise.reject({cancel: true});
				}
				onError(error);
			});
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [store]);
};

export {
	ServerRedux,
	useServerSites,
	useServerValidate,
};
