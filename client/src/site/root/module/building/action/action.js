import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const doBuildingCreate = doPost("root.building.create");
const doBuildingUpdate = doPost("root.building.update");
const doBuildingDelete = doPost("root.building.delete");
const fetchBuildingPage = fetchPage("root.kingdom.building.page", "kingdom");

export {
	doBuildingCreate,
	doBuildingUpdate,
	doBuildingDelete,
	fetchBuildingPage,
};
