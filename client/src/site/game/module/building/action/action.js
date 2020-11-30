import {Server} from "@leight-core/leight";

const doBuildingCreate = Server.createPost("game.building.create");
const doBuildingUpdate = Server.createPost("game.building.update");
const doBuildingDelete = Server.createPost("game.building.delete");
const fetchBuildingPage = Server.createFetchPage("game.kingdom.building.page");

export {
	doBuildingCreate,
	doBuildingUpdate,
	doBuildingDelete,
	fetchBuildingPage,
};
