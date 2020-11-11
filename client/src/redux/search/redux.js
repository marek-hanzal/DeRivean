import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import post from "utils/server/post";

const useSearch = (
	data,
	events,
) => {
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		doSearch(
			discoveryContext,
			data,
			events,
			navigate,
			cancelToken,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, []);
};

const doSearch = (
	discovery,
	data,
	events,
	navigate,
	cancelToken = null,
) => post(
	discovery.link("root.search"),
	data,
	events,
	navigate,
	cancelToken,
);

export {
	useSearch,
	doSearch,
};
