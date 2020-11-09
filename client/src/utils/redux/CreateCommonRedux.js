import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateRedux from "utils/redux/CreateRedux";

function CreateCommonRedux(
	id,
	updateId,
	deleteId,
	extra = {},
) {
	return CreateRedux(
		{
			update: CreateActionRedux(id, "update", updateId),
			delete: CreateActionRedux(id, "delete", deleteId),
			...extra,
		}
	);
}

export default CreateCommonRedux;
