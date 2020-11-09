import { selectLink } from "redux/discovery/redux";
import post from "utils/server/post";
import resolveReason from "utils/server/resolveReason";

const doCreate = (link) => {
	return (
		state,
		data,
		onSuccess,
		onError,
		onReason,
		cancelToken,
		navigate
	) => {
		post(
			selectLink(link, state),
			data,
			onSuccess,
			onError,
			cancelToken,
			resolveReason(onReason, navigate),
		);
	};
};

export default doCreate;
