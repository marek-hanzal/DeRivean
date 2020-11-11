import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import {doUserSearch} from "site/root/module/user/action/action";
import commonFetchHook from "utils/hook/commonFetchHook";

const useUserFetch = commonFetchHook("root.user.fetch");
const useUserAttributesFetch = commonFetchHook("root.user.attributes");
const useUserStatisticsFetch = commonFetchHook("root.user.statistics", "{user}");
const useUserSearch = (
	data,
	events,
) => {
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		doUserSearch(
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

export {
	useUserFetch,
	useUserAttributesFetch,
	useUserStatisticsFetch,
	useUserSearch,
};
