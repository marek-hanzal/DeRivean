import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateFetchRedux from "utils/redux/CreateFetchRedux";
import CreatePageRedux from "utils/redux/CreatePageRedux";
import CreateRedux from "utils/redux/CreateRedux";

function CreateCommonRedux(
	id,
	createId,
	updateId,
	deleteId,
	fetchId,
	pageId,
	extra = {},
) {
	return CreateRedux(
		{
			create: CreateActionRedux(id, "create", createId),
			update: CreateActionRedux(id, "update", updateId),
			delete: CreateActionRedux(id, "delete", deleteId),
			fetch: CreateFetchRedux(id, fetchId),
			page: CreatePageRedux(id, pageId),
			...extra,
		}
	);
}

export default CreateCommonRedux;
