import {createAction} from "redux-actions";

const
	onSessionOpen = createAction("ON_SESSION_OPEN", (user, route = "internal") => ({route, user})),
	onSessionClose = createAction("ON_SESSION_CLOSE", () => ({session: null}));

export {
	onSessionOpen,
	onSessionClose,
};
