import axios from "axios";
import { Server } from "server";

const post = (
	href,
	data,
	onSuccess   = data => null,
	onError     = null,
	cancelToken = null,
	onReason    = null,
) => {
	Server.post(href, data, {
		cancelToken: (cancelToken || axios.CancelToken.source()).token,
	})
		.then(({data}) => {
			onSuccess(data);
		})
		.catch(error => {
			if (axios.isCancel(error)) {
				return;
			}
			if (onReason && error.response && onReason[error.response.status]) {
				onReason[error.response.status](error);
			} else if (onError) {
				onError(error);
			}
		});
};

export default post;
