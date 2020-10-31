import {combineReducers} from "redux";
import CreateFetchDispatch from "utils/redux/CreateFetchDispatch";
import CreatePageDispatch from "utils/redux/CreatePageDispatch";
import CreateSimpleDispatch from "utils/redux/CreateSimpleDispatch";

function CreateModule(
	id,
	createId,
	updateId,
	fetchId,
	pageId,
	extra = {},
) {
	return {
		redux: {
			create: CreateSimpleDispatch(id, "create", createId),
			update: CreateSimpleDispatch(id, "update", updateId),
			fetch: CreateFetchDispatch(id, fetchId),
			page: CreatePageDispatch(id, pageId),
			...extra,
		},
		reducer: function () {
			return combineReducers(Object.entries(this.redux).reduce((item, [action, redux]) => ({...item, [action]: redux.reducer()}), {}));
		}
	};
}

export default CreateModule;
