import buildUrl from "build-url";
import get from "utils/server/get";

const fetchPage = (link, param) => {
	return (
		discovery,
		page,
		size,
		params = null,
		events,
		navigate,
		cancelToken = null,
	) => get(
		buildUrl(discovery.page(link, page, param, params ? params[param] : null), {queryParams: {limit: size.toString()}}),
		events,
		navigate,
		cancelToken,
	);
};

export default fetchPage;
