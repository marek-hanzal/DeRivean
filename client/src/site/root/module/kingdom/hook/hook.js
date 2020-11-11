import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import {doKingdomSearch} from "site/root/module/kingdom/action/action";
import commonFetchHook from "utils/hook/commonFetchHook";

const useKingdomFetch = commonFetchHook("root.kingdom.fetch");
const useKingdomAttributesFetch = commonFetchHook("root.kingdom.attributes");
const useKingdomStatisticsFetch = commonFetchHook("root.kingdom.statistics", "{kingdom}");
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
	}, [data]);
};

export {
	useKingdomFetch,
	useKingdomAttributesFetch,
	useKingdomStatisticsFetch,
};
