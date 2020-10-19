import {createAction} from "redux-actions";

const
	onSessionOpen = createAction("ON_SESSION_OPEN", session => session),
	onSessionClose = createAction("ON_SESSION_CLOSE", () => ({session: null}));

export {
	onSessionOpen,
	onSessionClose,
};
