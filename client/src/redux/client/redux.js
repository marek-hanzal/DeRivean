import axios from "axios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import get from "utils/server/get";
import resolveReason from "utils/server/resolveReason";

const useClient = (
	onSuccess = data => null,
	onError = null,
	onReason = null,
	href = "/client.json"
) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			href,
			onSuccess,
			onError,
			cancelToken,
			resolveReason(onReason, navigate),
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [dispatch, href]);
};

export {
	useClient,
};
