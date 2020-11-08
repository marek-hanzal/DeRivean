import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateFetchRedux from "utils/redux/CreateFetchRedux";
import CreateRedux from "utils/redux/CreateRedux";

function CreateCommonRedux(
	id,
	createId,
	updateId,
	deleteId,
	fetchId,
	extra = {},
) {
	return CreateRedux(
		{
			create: CreateActionRedux(id, "create", createId),
			update: CreateActionRedux(id, "update", updateId),
			delete: CreateActionRedux(id, "delete", deleteId),
			fetch: CreateFetchRedux(id, fetchId),
			...extra,
		}
	);
}

export default CreateCommonRedux;
