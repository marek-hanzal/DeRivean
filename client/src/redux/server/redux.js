import axios from "axios";
import {useEffect} from "react";
import {useStore} from "react-redux";
import {useNavigate} from "react-router";
import {selectLink} from "redux/discovery/redux";
import get from "utils/server/get";
import resolveReason from "utils/server/resolveReason";

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
	}, [store]);
};

const useServerValidate = (
	onSuccess = validation => null,
	onError = error => null,
	onReason = null,
) => {
	const store = useStore();
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			selectLink("root.server.validate", store.getState()),
			onSuccess,
			onError,
			cancelToken,
			resolveReason(onReason, navigate),
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [store]);
};

export {
	useServerSites,
	useServerValidate,
};
