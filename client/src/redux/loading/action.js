import {createAction} from "redux-actions";

const
	onLoading = createAction("ON_LOADING", loading => loading);

export {
	onLoading,
};
