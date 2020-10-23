import miniAction from "utils/action/actions/miniAction";

const
	onSessionOpen  = miniAction("session.open", "user"),
	onSessionClose = miniAction("session.close", "user", {site: "public"});

export {
	onSessionOpen,
	onSessionClose,
};
