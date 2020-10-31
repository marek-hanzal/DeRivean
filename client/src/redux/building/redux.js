import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import CreateRedux from "utils/redux/CreateRedux";

const BuildingRedux = CreateRedux(
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
