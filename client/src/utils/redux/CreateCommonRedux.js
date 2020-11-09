import CreateActionRedux from "utils/redux/CreateActionRedux";
import CreateRedux from "utils/redux/CreateRedux";

function CreateCommonRedux(
	id,
	deleteId,
	extra = {},
) {
	return CreateRedux(
		{
			delete: CreateActionRedux(id, "delete", deleteId),
			...extra,
		}
	);
}

export default CreateCommonRedux;
