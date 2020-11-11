import post from "utils/server/post";

const doPost = (link) => {
	return (
		discovery,
		data,
		events,
		navigate,
		cancelToken,
	) => {
		post(
			discovery.link(link),
			data,
			events,
			navigate,
			cancelToken,
		);
	};
};

export default doPost;
