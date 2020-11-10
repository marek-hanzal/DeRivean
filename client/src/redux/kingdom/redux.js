import axios from "axios";
import DiscoveryContext from "component/system/DiscoveryContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import commonFetchHook from "utils/hook/commonFetchHook";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const doKingdomCreate = doPost("root.kingdom.create");
const doKingdomUpdate = doPost("root.kingdom.update");
const doKingdomDelete = doPost("root.kingdom.delete");
const useKingdomFetch = commonFetchHook("root.kingdom.fetch");
const useKingdomAttributesFetch = commonFetchHook("root.kingdom.attributes");
const useKingdomStatisticsFetch = commonFetchHook("root.kingdom.statistics", "{kingdom}");
const fetchKingdomPage = fetchPage("root.user.kingdom.page", "user");
const useKingdomSearch = (
	data,
	onSuccess = validation => null,
	onError = error => null,
	onReason = null,
) => {
	const discovery = useContext(DiscoveryContext);
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		doKingdomSearch(
			discovery,
			data,
			onSuccess,
			onError,
			onReason,
			cancelToken,
			navigate,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [data, discovery]);
};
const doKingdomSearch = (
	discovery,
	data,
	onSuccess,
	onError,
	onReason,
	cancelToken,
	navigate
) => {
	post(
		discovery.selectLink("root.kingdom.search"),
		data,
		onSuccess,
		onError,
		cancelToken,
		resolveReason(onReason, navigate),
	);
};

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
