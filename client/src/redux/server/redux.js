import axios from "axios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateRedux from "utils/redux/CreateRedux";

const ServerRedux = CreateRedux({
	validate: CreateLinkRedux("server", "validate", "root.server.validate"),
	sites: CreateLinkRedux("server", "sites", "root.server.sites"),
});

const useServerSites = (
	onSuccess = sites => ({}),
	onError = error => ({}),
) => {
	const dispatch = useDispatch();
	const cancelToken = axios.CancelToken.source();
	useEffect(() => {
		dispatch(ServerRedux.redux.sites.dispatch.sites(cancelToken)).then(onSuccess, onError);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [dispatch]);
};

export {
	ServerRedux,
	useServerSites,
};
