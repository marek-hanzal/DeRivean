import {createAction} from "redux-actions";

const
	onSessionOpen = createAction("ON_SESSION_OPEN", user => user),
	onSessionClose = createAction("ON_SESSION_CLOSE", () => ({user: {site: "public"}}));

export {
	onSessionOpen,
	onSessionClose,
};
