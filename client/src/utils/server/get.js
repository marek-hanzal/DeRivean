import axios from "axios";
import {Server} from "server";

const get = (
	href,
	onSuccess = data => null,
	onError = error => null,
	cancelToken = null,
) => {
	Server.get(href, {
		cancelToken: (cancelToken || axios.CancelToken.source()).token,
	})
		.then(({data}) => {
			onSuccess(data);
		})
		.catch(error => {
			if (!axios.isCancel(error)) {
				onError(error);
			}
		});
};

export default get;
