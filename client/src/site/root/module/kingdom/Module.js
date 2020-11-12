import {doKingdomCreate, doKingdomDelete, doKingdomSearch, doKingdomUpdate, fetchKingdomPage} from "site/root/module/kingdom/action/action";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import {useKingdomAttributesFetch, useKingdomFetch} from "site/root/module/kingdom/hook/hook";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import Routes from "site/Routes";
import Module from "utils/Module";

class KingdomModule extends Module {
	attributes;
	search;

	constructor(id) {
		super(id);
		this.validateFields.push("attributes", "search");
	}
}

function CreateKingdomModule() {
	const module = new KingdomModule("root.kingdom");
	module.baseView = KingdomView;
	module.icon = <KingdomIcon/>;
	module.link = Routes.root.kingdom;
	module.create = doKingdomCreate;
	module.update = doKingdomUpdate;
	module.delete = doKingdomDelete;
	module.fetch = useKingdomFetch;
	module.page = fetchKingdomPage;
	module.param = "kingdom";
	module.parentParam = "user";
	module.attributes = useKingdomAttributesFetch;
	module.search = doKingdomSearch;
	return module;
}

export {
	CreateKingdomModule,
};
