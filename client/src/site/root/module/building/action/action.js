import {Server} from "@leight-core/leight";

const doBuildingCreate = Server.createPost("root.building.create");
const doBuildingUpdate = Server.createPost("root.building.update");
const doBuildingDelete = Server.createPost("root.building.delete");
const fetchBuildingPage = Server.createFetchPage("root.kingdom.building.page");

export {
	doBuildingCreate,
	doBuildingUpdate,
	doBuildingDelete,
	fetchBuildingPage,
};
