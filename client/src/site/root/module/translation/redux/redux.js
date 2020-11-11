import axios from "axios";
import {DiscoveryContext} from "component/discovery/Discovery";
import {useContext, useEffect} from "react";
import {useNavigate} from "react-router";
import commonFetchHook from "utils/hook/commonFetchHook";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";
import get from "utils/server/get";

const useTranslation = events => {
	const navigate = useNavigate();
	const discoveryContext = useContext(DiscoveryContext);
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			discoveryContext.link("public.translation"),
			events,
			navigate,
			cancelToken,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, []);
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
