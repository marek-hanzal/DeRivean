import axios from "axios";
import DiscoveryContext from "component/system/DiscoveryContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import get from "utils/server/get";
import resolveReason from "utils/server/resolveReason";

const commonFetchHook = (link, replace = "{id}") => {
	return (
		uuid,
		onSuccess = data => null,
		onFailure = error => null,
		onReason = null,
	) => {
		const navigate = useNavigate();
		const discovery = useContext(DiscoveryContext);
		useEffect(() => {
			const cancelToken = axios.CancelToken.source();
			get(
				discovery.selectFetch(link, uuid, replace),
				onSuccess,
				onFailure,
				cancelToken,
				resolveReason(onReason, navigate),
			);
			return () => cancelToken.cancel();
			// eslint-disable-next-line
		}, [uuid, discovery]);
	};
};

export default commonFetchHook;
