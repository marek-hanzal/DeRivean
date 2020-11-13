import doPost from "utils/server/doPost";
import fetchPage from "utils/server/fetchPage";

const doBuildingCreate = doPost("game.building.create");
const doBuildingUpdate = doPost("game.building.update");
const doBuildingDelete = doPost("game.building.delete");
const fetchBuildingPage = fetchPage("game.user.kingdom.building.page");

export {
	doBuildingCreate,
	doBuildingUpdate,
	doBuildingDelete,
	fetchBuildingPage,
};
