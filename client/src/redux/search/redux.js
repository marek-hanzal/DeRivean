import axios from "axios";
import { useEffect } from "react";
import { useStore } from "react-redux";
import { useNavigate } from "react-router";
import { selectLink } from "redux/discovery/redux";
import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const useSearch = (
	data,
	onSuccess = validation => null,
	onError   = error => null,
	onReason  = null,
) => {
	const store    = useStore();
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		doSearch(
			store.getState(),
			data,
			onSuccess,
			onError,
			onReason,
			cancelToken,
			navigate,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [store]);
};

const doSearch = (
	state,
	data,
	onSuccess,
	onError,
	onReason,
	cancelToken,
	navigate
) => {
	post(
		selectLink("root.search", state),
		data,
		onSuccess,
		onError,
		cancelToken,
		resolveReason(onReason, navigate),
	);
};

export {
	useSearch,
	doSearch,
};
