import axios from "axios";
import {Server} from "server";
import Routes from "site/Routes";
import handleError from "utils/server/handleError";
import handleSuccess from "utils/server/handleSuccess";

const doDelete = (
	href,
	events,
	navigate,
	cancelToken = null,
) => {
	events.on("http-401", () => setTimeout(() => navigate(Routes.root.sessionExpired.link()), 0), 100);
	Server.delete(href, {cancelToken: (cancelToken || axios.CancelToken.source()).token})
		.then(response => handleSuccess(response, events))
		.catch(error => handleError(error, events));
};

export default doDelete;
