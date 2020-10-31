import CreateModule from "utils/redux/CreateModule";
import CreateSimpleFetchDispatch from "utils/redux/CreateSimpleFetchDispatch";

const KingdomRedux = CreateModule(
	"kingdom",
	"root.kingdom.create",
	"root.kingdom.update",
	"root.kingdom.fetch",
	"root.user.kingdom.page",
	{
		attributes: CreateSimpleFetchDispatch("kingdom", "attributes", "root.kingdom.attributes"),
	},
);

export default KingdomRedux;
