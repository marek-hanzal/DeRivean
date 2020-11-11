import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import commonFetchHook from "utils/hook/commonFetchHook";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";

const doKingdomCreate = doPost("root.kingdom.create");
const doKingdomUpdate = doPost("root.kingdom.update");
const doKingdomDelete = doPost("root.kingdom.delete");
const useKingdomFetch = commonFetchHook("root.kingdom.fetch");
const useKingdomAttributesFetch = commonFetchHook("root.kingdom.attributes");
const useKingdomStatisticsFetch = commonFetchHook("root.kingdom.statistics", "{kingdom}");
const fetchKingdomPage = fetchPage("root.user.kingdom.page", "user");
const useKingdomSearch = (
	data,
	events,
) => {
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		doKingdomSearch(
			discoveryContext,
			data,
			events,
			navigate,
			cancelToken,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [data, discoveryContext]);
};
const doKingdomSearch = (
	discovery,
	data,
	events,
	navigate,
	cancelToken,
) => post(
	discovery.link("root.kingdom.search"),
	data,
	events,
	navigate,
	cancelToken,
);

export {
	doKingdomCreate,
	doKingdomUpdate,
	doKingdomDelete,
	useKingdomFetch,
	useKingdomAttributesFetch,
	useKingdomStatisticsFetch,
	fetchKingdomPage,
	useKingdomSearch,
	doKingdomSearch,
};
