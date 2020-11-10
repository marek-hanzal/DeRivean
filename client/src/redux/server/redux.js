import axios from "axios";
import DiscoveryContext from "component/system/DiscoveryContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import get from "utils/server/get";
import resolveReason from "utils/server/resolveReason";

const useServerSites = (
	onSuccess = sites => null,
	onError = error => null,
) => {
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(discoveryContext.link("root.server.sites"), onSuccess, onError, cancelToken, resolveReason(null, navigate));
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [discoveryContext]);
};

const useServerValidate = (
	onSuccess = validation => null,
	onError = error => null,
	onReason = null,
) => {
	const discovery = useContext(DiscoveryContext);
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			discovery.link("root.server.validate"),
			onSuccess,
			onError,
			cancelToken,
			resolveReason(onReason, navigate),
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [discovery]);
};

export {
	useServerSites,
	useServerValidate,
};
