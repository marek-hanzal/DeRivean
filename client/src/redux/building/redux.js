import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import CreateLinkRedux from "utils/redux/CreateLinkRedux";
import fetchPage from "utils/server/fetchPage";

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

const useBuildingFetch = commonFetchHook(BuildingRedux);
const dispatchBuildingUpdate = commonUpdateDispatch(BuildingRedux);
const fetchBuildingPage = fetchPage("root.kingdom.building.page", "kingdom");

export {
	BuildingRedux,
	useBuildingFetch,
	dispatchBuildingUpdate,
	fetchBuildingPage,
};
