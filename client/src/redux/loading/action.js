import miniAction from "utils/action/actions/miniAction";

const Loading = {
	start: miniAction("loading.start", "state"),
	finish: miniAction("loading.finish", "state"),
};

export default Loading;
