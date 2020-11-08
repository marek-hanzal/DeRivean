import axios from "axios";
import {useEffect} from "react";
import {useStore} from "react-redux";
import {selectLink} from "redux/discovery/redux";
import get from "utils/server/get";

const useServerSites = (
	onSuccess = sites => null,
	onError = error => null,
) => {
	const store = useStore();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(selectLink("root.server.sites", store.getState()), onSuccess, onError, cancelToken);
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
		get(selectLink("root.server.validate", store.getState()), onSuccess, onError, cancelToken);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [store]);
};

export {
	useServerSites,
	useServerValidate,
};
