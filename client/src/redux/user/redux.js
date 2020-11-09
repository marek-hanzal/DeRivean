import axios from "axios";
import {useEffect} from "react";
import {useStore} from "react-redux";
import {useNavigate} from "react-router";
import {selectLink} from "redux/discovery/redux";
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
	const store = useStore();
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		doUserSearch(
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
const doUserSearch = (
	state,
	data,
	onSuccess,
	onError,
	onReason,
	cancelToken,
	navigate
) => {
	post(
		selectLink("root.user.search", state),
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
