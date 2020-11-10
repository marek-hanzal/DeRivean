import axios from "axios";
import DiscoveryContext from "component/system/DiscoveryContext";
import {useContext, useEffect} from "react";
import get from "utils/server/get";

const useSessionCheck = (
	onSuccess = () => null,
	onError = null,
	onReason = null,
) => {
	const discovery = useContext(DiscoveryContext);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			discovery.link("public.user.login"),
			onSuccess,
			onError,
			cancelToken,
			onReason,
		);
		// eslint-disable-next-line
	}, [discovery]);
};

export {
	useSessionCheck,
};
