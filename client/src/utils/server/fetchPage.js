import post from "utils/server/post";

const fetchPage = (link, param) => {
	return (
		discovery,
		page,
		limit,
		params = null,
		events,
		navigate,
		cancelToken = null,
	) => post(
		discovery.page(link, param, params ? params[param] : null),
		{
			page,
			limit,
		},
		events,
		navigate,
		cancelToken,
	);
};

export default fetchPage;
