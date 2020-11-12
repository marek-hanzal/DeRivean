import {doBuildingCreate, doBuildingDelete, doBuildingUpdate, fetchBuildingPage} from "site/root/module/building/action/action";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import {useBuildingAttributesFetch, useBuildingFetch} from "site/root/module/building/hook/hook";
import BuildingView from "site/root/module/building/view/BuildingView";
import Routes from "site/Routes";
import Module from "utils/Module";

class BuildingModule extends Module {
	attributes;

	constructor(id) {
		super(id);
		this.validateFields.push("attributes");
	}
}

function CreateBuildingModule() {
	const module = new BuildingModule("root.building");
	module.baseView = BuildingView;
	module.icon = <BuildingIcon/>;
	module.link = Routes.root.building;
	module.create = doBuildingCreate;
	module.update = doBuildingUpdate;
	module.delete = doBuildingDelete;
	module.fetch = useBuildingFetch;
	module.page = fetchBuildingPage;
	module.param = "building";
	module.parent = "kingdom";
	module.attributes = useBuildingAttributesFetch;
	return module;
}

export {
	CreateBuildingModule,
};