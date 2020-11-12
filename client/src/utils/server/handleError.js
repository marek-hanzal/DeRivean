import axios from "axios";

const handleError = (error, events) => {
	if (axios.isCancel(error)) {
		return;
	}
	if (error.response && error.response.status) {
		events.call("http-" + error.response.status, error.response.data);
	} else {
		events.call("error", error);
	}
	events.call("catch", error);
	events.call("done");
};

export default handleError;
