import commonFetchHook from "utils/hook/commonFetchHook";
import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const doBuildingCreate = doPost("root.building.create");
const doBuildingUpdate = doPost("root.building.update");
const doBuildingDelete = doPost("root.building.delete");
const useBuildingFetch = commonFetchHook("root.building.fetch");
const useBuildingAttributesFetch = commonFetchHook("root.building.attributes");
const fetchBuildingPage = fetchPage("root.kingdom.building.page", "kingdom");

export {
	doBuildingCreate,
	doBuildingUpdate,
	doBuildingDelete,
	useBuildingFetch,
	useBuildingAttributesFetch,
	fetchBuildingPage,
};
