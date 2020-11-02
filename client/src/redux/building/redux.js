import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";

const BuildingRedux = CreateCommonRedux(
	"building",
	"root.building.create",
	"root.building.update",
	"root.building.delete",
	"root.building.fetch",
	"root.kingdom.building.page",
	{
		attributes: CreateLinkRedux("building", "attributes", "root.building.attributes"),
	},
);

export default BuildingRedux;
