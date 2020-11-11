import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import commonFetchHook from "utils/hook/commonFetchHook";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";

const doUserCreate = doPost("root.user.create");
const doUserUpdate = doPost("root.user.update");
const doUserDelete = doPost("root.user.delete");
const useUserFetch = commonFetchHook("root.user.fetch");
const useUserAttributesFetch = commonFetchHook("root.user.attributes");
const useUserStatisticsFetch = commonFetchHook("root.user.statistics", "{user}");
const fetchUserPage = fetchPage("root.user.page");
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
const doUserSearch = (
	discovery,
	data,
	events,
	navigate,
	cancelToken,
) => {
	post(
		discovery.link("root.user.search"),
		data,
		events,
		navigate,
		cancelToken,
	);
}

export {
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
