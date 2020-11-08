import commonFetchHook from "utils/hook/commonFetchHook";
import commonUpdateDispatch from "utils/redux/commonUpdateDispatch";
import CreateCommonRedux from "utils/redux/CreateCommonRedux";
import fetchPage from "utils/server/fetchPage";

const BuildingRedux = CreateCommonRedux(
	"building",
	"root.building.create",
	"root.building.update",
	"root.building.delete",
);

const useBuildingFetch = commonFetchHook("root.building.fetch");
const useBuildingAttributesFetch = commonFetchHook("root.building.attributes");
const dispatchBuildingUpdate = commonUpdateDispatch(BuildingRedux);
const fetchBuildingPage = fetchPage("root.kingdom.building.page", "kingdom");

export {
	BuildingRedux,
	useBuildingFetch,
	useBuildingAttributesFetch,
	dispatchBuildingUpdate,
	fetchBuildingPage,
};
