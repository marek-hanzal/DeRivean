import CreateModule from "utils/redux/CreateModule";
import CreateSimpleFetchDispatch from "utils/redux/CreateSimpleFetchDispatch";

const BuildingRedux = CreateModule(
	"building",
	"root.building.create",
	"root.building.update",
	"root.building.fetch",
	"root.kingdom.building.page",
	{
		attributes: CreateSimpleFetchDispatch("building", "attributes", "root.building.attributes"),
	},
);

export default BuildingRedux;
