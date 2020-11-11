import post from "utils/server/post";

const doSearch = (
	discovery,
	data,
	events,
	navigate,
	cancelToken = null,
) => post(
	discovery.link("root.search"),
	data,
	events,
	navigate,
	cancelToken,
);

export {
	doSearch,
};
