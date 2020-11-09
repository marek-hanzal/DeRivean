import commonFetchHook from "utils/hook/commonFetchHook";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const BuildingRedux = CreateCommonRedux(
	"building",
	"root.building.delete",
);

const doBuildingCreate = doPost("root.building.create");
const doBuildingUpdate = doPost("root.building.update");
const useBuildingFetch = commonFetchHook("root.building.fetch");
const useBuildingAttributesFetch = commonFetchHook("root.building.attributes");
const fetchBuildingPage = fetchPage("root.kingdom.building.page", "kingdom");

export {
	BuildingRedux,
	doBuildingCreate,
	doBuildingUpdate,
	useBuildingFetch,
	useBuildingAttributesFetch,
	fetchBuildingPage,
};
