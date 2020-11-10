import buildUrl from "build-url";
import get from "utils/server/get";
import resolveReason from "utils/server/resolveReason";

const fetchPage = (link, param) => {
	return (
		discovery,
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
			buildUrl(discovery.selectPage(link, page, param, params ? params[param] : null), {queryParams: {limit: size.toString()}}),
			onSuccess,
			onError,
			cancelToken,
			resolveReason(onReason, navigate),
		);
	};
};

export default fetchPage;
