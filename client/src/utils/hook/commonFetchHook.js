import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import get from "utils/server/get";

const commonFetchHook = (link, replace = "{id}") => {
	return (
		uuid,
		events,
	) => {
		const navigate = useNavigate();
		const discoveryContext = useContext(DiscoveryContext);
		useEffect(() => {
			const cancelToken = axios.CancelToken.source();
			events.call("request", uuid);
			get(
				discoveryContext.fetch(link, uuid, replace),
				events,
				navigate,
				cancelToken,
			);
			return () => cancelToken.cancel();
			// eslint-disable-next-line
		}, [uuid]);
	};
};

export default commonFetchHook;
