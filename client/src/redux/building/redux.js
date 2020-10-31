import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateModule from "utils/redux/CreateModule";

const BuildingRedux = CreateModule(
	"building",
	"root.building.create",
	"root.building.update",
	"root.building.fetch",
	"root.kingdom.building.page",
	{
		attributes: CreateLinkRedux("building", "attributes", "root.building.attributes"),
	},
);

export default BuildingRedux;
