import axios from "axios";
import {useEffect} from "react";
import {useStore} from "react-redux";
import {useNavigate} from "react-router";
import {selectFetch} from "redux/discovery/redux";
import get from "utils/server/get";
import resolveReason from "utils/server/resolveReason";

const commonFetchHook = (link, replace = "{id}") => {
	return (
		uuid,
		onSuccess = data => null,
		onFailure = error => null,
		onReason = null,
	) => {
		const store = useStore();
		const navigate = useNavigate();
		useEffect(() => {
			const cancelToken = axios.CancelToken.source();
			get(
				selectFetch(link, uuid, store.getState(), replace),
				onSuccess,
				onFailure,
				resolveReason(onReason, navigate),
			);
			return () => cancelToken.cancel();
			// eslint-disable-next-line
		}, [uuid]);
	};
};

export default commonFetchHook;
