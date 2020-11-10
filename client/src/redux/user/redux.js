import axios from "axios";
import DiscoveryContext from "component/system/DiscoveryContext";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import commonFetchHook from "utils/hook/commonFetchHook";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const doUserRegister = doPost("public.user.register");
const doUserLogin = doPost("public.user.login");
const doUserCreate = doPost("root.user.create");
const doUserUpdate = doPost("root.user.update");
const doUserDelete = doPost("root.user.delete");
const useUserFetch = commonFetchHook("root.user.fetch");
const useUserAttributesFetch = commonFetchHook("root.user.attributes");
const useUserStatisticsFetch = commonFetchHook("root.user.statistics", "{user}");
const fetchUserPage = fetchPage("root.user.page");
const useUserSearch = (
	data,
	onSuccess = validation => null,
	onError = error => null,
	onReason = null,
) => {
	const discoveryContext = useContext(DiscoveryContext);
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		doUserSearch(
			discoveryContext,
			data,
			onSuccess,
			onError,
			onReason,
			cancelToken,
			navigate,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [discoveryContext, data]);
};
const doUserSearch = (
	discovery,
	data,
	onSuccess,
	onError,
	onReason,
	cancelToken,
	navigate
) => {
	post(
		discovery.link("root.user.search"),
		data,
		onSuccess,
		onError,
		cancelToken,
		resolveReason(onReason, navigate),
	);
};

export {
	doUserRegister,
	doUserLogin,
	doUserCreate,
	doUserUpdate,
	doUserDelete,
	useUserFetch,
	useUserAttributesFetch,
	useUserStatisticsFetch,
	fetchUserPage,
	useUserSearch,
	doUserSearch,
};
