import {createAction} from "redux-actions";

const
	onUserRegisterStatus = createAction("ON_USER_REGISTER_STATUS", status => status);

export {
	onUserRegisterStatus,
};
