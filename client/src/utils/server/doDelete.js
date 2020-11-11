import axios from "axios";
import {Server} from "server";
import Routes from "site/Routes";

const doDelete = (
	href,
	events,
	navigate,
	cancelToken = null,
) => {
	events.on("http-401", () => setTimeout(() => navigate(Routes.root.sessionExpired.link()), 0), 100);
	Server.delete(href, {cancelToken: (cancelToken || axios.CancelToken.source()).token})
		.then(({data}) => events.on("success", data))
		.catch(error => {
			if (axios.isCancel(error)) {
				return;
			}
			if (error.response && error.response.status) {
				events.call("http-" + error.response.status, error.response.data);
			} else {
				events.call("error", error);
			}
		});
};

export default doDelete;
