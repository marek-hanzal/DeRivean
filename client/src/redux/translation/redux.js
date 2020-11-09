import axios from "axios";
import {useEffect} from "react";
import {useStore} from "react-redux";
import {useNavigate} from "react-router";
import {selectLink} from "redux/discovery/redux";
import commonFetchHook from "utils/hook/commonFetchHook";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import get from "utils/server/get";
import resolveReason from "utils/server/resolveReason";

const useTranslation = (
	onSuccess = validation => null,
	onError = error => null,
	onReason = null,
) => {
	const store = useStore();
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			selectLink("public.translation", store.getState()),
			onSuccess,
			onError,
			cancelToken,
			resolveReason(onReason, navigate),
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [store]);
};
const doTranslationCreate = doPost("root.translation.create");
const doTranslationUpdate = doPost("root.translation.update");
const doTranslationDelete = doPost("root.translation.delete");
const useTranslationFetch = commonFetchHook("root.translation.fetch");
const fetchTranslationPage = fetchPage("root.translation.page");

export {
	useTranslation,
	doTranslationCreate,
	doTranslationUpdate,
	doTranslationDelete,
	useTranslationFetch,
	fetchTranslationPage,
};
