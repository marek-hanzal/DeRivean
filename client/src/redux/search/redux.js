import axios from "axios";
import DiscoveryContext from "component/system/DiscoveryContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const useSearch = (
	data,
	onSuccess = validation => null,
	onError = error => null,
	onReason = null,
) => {
	const navigate = useNavigate();
	const discoveryContext = useContext(DiscoveryContext);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		doSearch(
			discoveryContext,
			data,
			onSuccess,
			onError,
			onReason,
			cancelToken,
			navigate,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, []);
};

const doSearch = (
	discovery,
	data,
	onSuccess,
	onError,
	onReason,
	cancelToken,
	navigate
) => {
	post(
		discovery.link("root.search"),
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
