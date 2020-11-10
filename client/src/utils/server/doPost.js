import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const doPost = (link) => {
	return (
		discovery,
		data,
		onSuccess,
		onError,
		onReason,
		cancelToken,
		navigate
	) => {
		post(
			discovery.link(link),
			data,
			onSuccess,
			onError,
			cancelToken,
			resolveReason(onReason, navigate),
		);
	};
};

export default doPost;
