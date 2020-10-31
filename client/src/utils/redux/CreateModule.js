import {combineReducers} from "redux";
import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateFetchRedux from "utils/redux/CreateFetchRedux";
import CreatePageRedux from "utils/redux/CreatePageRedux";

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
			create: CreateActionRedux(id, "create", createId),
			update: CreateActionRedux(id, "update", updateId),
			fetch: CreateFetchRedux(id, fetchId),
			page: CreatePageRedux(id, pageId),
			...extra,
		},
		reducer: function () {
			return combineReducers(Object.entries(this.redux).reduce((item, [action, redux]) => ({...item, [action]: redux.reducer()}), {}));
		}
	};
}

export default CreateModule;
