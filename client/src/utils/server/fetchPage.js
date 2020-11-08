import buildUrl from "build-url";
import {selectPage} from "redux/discovery/redux";
import get from "utils/server/get";
import resolveReason from "utils/server/resolveReason";

const fetchPage = (link) => {
	return (
		state,
		page,
		size,
		name = null,
		param = null,
		cancelToken = null,
		navigate,
		onSuccess = data => null,
		onError = error => null,
		onReason,
	) => {
		get(
			buildUrl(selectPage(link, state, page, name, param), {queryParams: {limit: size.toString()}}),
			onSuccess,
			onError,
			cancelToken,
			resolveReason(onReason, navigate),
		);
	};
};

export default fetchPage;
