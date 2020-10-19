import {createAction} from "redux-actions";

const
	onSessionOpen = createAction("ON_SESSION_OPEN", (user, route = "internal") => ({route, user})),
	onSessionClose = createAction("ON_SESSION_CLOSE", () => ({user: null, route: "public"}));

export {
	onSessionOpen,
	onSessionClose,
};
