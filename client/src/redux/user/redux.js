import axios from "axios";
import {useEffect} from "react";
import {useStore} from "react-redux";
import {useNavigate} from "react-router";
import {selectLink} from "redux/discovery/redux";
import dismissAction from "utils/action/actions/dismissAction";
import commonFetchHook from "utils/hook/commonFetchHook";
import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const UserRedux = CreateCommonRedux(
	"user",
	"root.user.delete",
	{
		register: CreateActionRedux("user", "register", "public.user.register", {
			dismiss: dismissAction("user.register"),
		}),
		login: CreateActionRedux("user", "login", "public.user.login", {
			dismiss: dismissAction("user.login"),
		}),
	},
);
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
	UserRedux,
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
