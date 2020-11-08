import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateRedux from "utils/redux/CreateRedux";

function CreateCommonRedux(
	id,
	createId,
	updateId,
	deleteId,
	extra = {},
) {
	return CreateRedux(
		{
			create: CreateActionRedux(id, "create", createId),
			update: CreateActionRedux(id, "update", updateId),
			delete: CreateActionRedux(id, "delete", deleteId),
			...extra,
		}
	);
}

export default CreateCommonRedux;
