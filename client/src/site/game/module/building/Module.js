import BuildingIcon from "site/common/icon/BuildingIcon";
import {doBuildingCreate, doBuildingDelete, doBuildingUpdate, fetchBuildingPage} from "site/game/module/building/action/action";
import {useBuildingFetch} from "site/game/module/building/hook/hook";
import BuildingView from "site/game/module/building/view/BuildingView";
import Routes from "site/Routes";
import Module from "utils/Module";

class BuildingModule extends Module {
}

function CreateBuildingModule() {
	const module = new BuildingModule("game.building");
	module.baseView = BuildingView;
	module.icon = <BuildingIcon/>;
	module.link = Routes.game.building;
	module.create = doBuildingCreate;
	module.update = doBuildingUpdate;
	module.delete = doBuildingDelete;
	module.fetch = useBuildingFetch;
	module.page = fetchBuildingPage;
	module.param = "building";
	return module.validate();
}

export {
	CreateBuildingModule,
};
