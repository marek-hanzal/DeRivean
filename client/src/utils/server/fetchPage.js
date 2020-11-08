import buildUrl from "build-url";
import {selectPage} from "redux/discovery/redux";
import get from "utils/server/get";
import resolveReason from "utils/server/resolveReason";

const fetchPage = (link, param) => {
	return (
		state,
		page,
		size,
		params = null,
		cancelToken = null,
		navigate,
		onSuccess = data => null,
		onError = error => null,
		onReason,
	) => {
		get(
			buildUrl(selectPage(link, state, page, param, params ? params[param] : null), {queryParams: {limit: size.toString()}}),
			onSuccess,
			onError,
			cancelToken,
			resolveReason(onReason, navigate),
		);
	};
};

export default fetchPage;
