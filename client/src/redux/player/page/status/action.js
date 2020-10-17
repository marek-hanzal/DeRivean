import {createAction} from "redux-actions";

const
	onPlayerPageStatus = createAction("ON_PLAYER_PAGE_STATUS", status => status);

export {
	onPlayerPageStatus,
};
