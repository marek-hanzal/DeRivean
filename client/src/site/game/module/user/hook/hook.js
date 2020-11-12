import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import get from "utils/server/get";

const useUserResource = (events) => {
	const navigate = useNavigate();
	const discoveryContext = useContext(DiscoveryContext);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		events.call("request");
		get(
			discoveryContext.link("game.user.resource"),
			events,
			navigate,
			cancelToken,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, []);
};

export {
	useUserResource,
};
