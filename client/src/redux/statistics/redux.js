import axios from "axios";
import {useEffect} from "react";
import {useStore} from "react-redux";
import {selectLink} from "redux/discovery/redux";
import get from "utils/server/get";

const useStatistics = (
	onSuccess = validation => null,
	onError = error => null,
	onReason = null,
) => {
	const store = useStore();
	useEffect(() => {
		const cancelToken = axios.CancelToken.source();
		get(
			selectLink("root.statistics", store.getState()),
			onSuccess,
			onError,
			cancelToken,
			onReason,
		);
		return () => cancelToken.cancel();
		// eslint-disable-next-line
	}, [store]);
};

export {
	useStatistics,
};
