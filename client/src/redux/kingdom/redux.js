import axios from "axios";
import {useEffect} from "react";
import {useStore} from "react-redux";
import {useNavigate} from "react-router";
import {selectLink} from "redux/discovery/redux";
import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const KingdomRedux = CreateCommonRedux(
	"kingdom",
	"root.kingdom.delete",
);

const doKingdomCreate = doPost("root.kingdom.create");
const doKingdomUpdate = doPost("root.kingdom.update");
const useKingdomFetch = commonFetchHook("root.kingdom.fetch");
const useKingdomAttributesFetch = commonFetchHook("root.kingdom.attributes");
const useKingdomStatisticsFetch = commonFetchHook("root.kingdom.statistics", "{kingdom}");
const dispatchKingdomUpdate = commonUpdateDispatch(KingdomRedux);
const fetchKingdomPage = fetchPage("root.user.kingdom.page", "user");
const useKingdomSearch = (
	data,
	onSuccess = validation => null,
	onError = error => null,
	onReason = null,
) => {
	const store = useStore();
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		doKingdomSearch(
			store.getState(),
			data,
			onSuccess,
			onError,
			onReason,
			cancelToken,
			navigate,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [store]);
};
const doKingdomSearch = (
	state,
	data,
	onSuccess,
	onError,
	onReason,
	cancelToken,
	navigate
) => {
	post(
		selectLink("root.kingdom.search", state),
		data,
		onSuccess,
		onError,
		cancelToken,
		resolveReason(onReason, navigate),
	);
};

export {
	KingdomRedux,
	doKingdomCreate,
	doKingdomUpdate,
	useKingdomFetch,
	useKingdomAttributesFetch,
	useKingdomStatisticsFetch,
	dispatchKingdomUpdate,
	fetchKingdomPage,
	useKingdomSearch,
	doKingdomSearch,
};
