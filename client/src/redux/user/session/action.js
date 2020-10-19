import {createAction} from "redux-actions";

const
	onUserSessionOpen = createAction("ON_USER_SESSION_OPEN", session => session),
	onUserSessionClose = createAction("ON_USER_SESSION_CLOSE", () => null);

export {
	onUserSessionOpen,
	onUserSessionClose,
};
