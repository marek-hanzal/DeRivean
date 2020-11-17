import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import commonFetchHook from "utils/hook/commonFetchHook";
import post from "utils/server/post";

const useAttributeTypeFetch = commonFetchHook("root.attribute-type.fetch");
const useAttributeTypeByGroups = (groups, events) => {
	const navigate = useNavigate();
	const discoveryContext = useContext(DiscoveryContext);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		events.call("request", groups);
		post(
			discoveryContext.link("root.attribute-group.attribute-type.list"),
			{groups},
			events,
			navigate,
			cancelToken,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [groups]);
};

export {
	useAttributeTypeFetch,
	useAttributeTypeByGroups,
};
