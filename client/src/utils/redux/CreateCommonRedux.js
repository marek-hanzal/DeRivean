import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateFetchRedux from "utils/redux/CreateFetchRedux";
import CreatePageRedux from "utils/redux/CreatePageRedux";
import CreateRedux from "utils/redux/CreateRedux";

function CreateCommonRedux(
	id,
	createId,
	updateId,
	fetchId,
	pageId,
	extra = {},
) {
	return CreateRedux(
		{
			create: CreateActionRedux(id, "create", createId),
			update: CreateActionRedux(id, "update", updateId),
			fetch: CreateFetchRedux(id, fetchId),
			page: CreatePageRedux(id, pageId),
			...extra,
		}
	);
}

export default CreateCommonRedux;
