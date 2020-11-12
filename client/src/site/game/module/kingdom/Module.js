import KingdomIcon from "site/common/icon/KingdomIcon";
import {doKingdomCreate, doKingdomDelete, doKingdomUpdate, fetchKingdomPage} from "site/game/module/kingdom/action/action";
import KingdomView from "site/game/module/kingdom/view/KingdomView";
import {useKingdomFetch} from "site/root/module/kingdom/hook/hook";
import Routes from "site/Routes";
import Module from "utils/Module";

class KingdomModule extends Module {
}

function CreateKingdomModule() {
	const module = new KingdomModule("game.kingdom");
	module.baseView = KingdomView;
	module.icon = <KingdomIcon/>;
	module.link = Routes.game.kingdom;
	module.create = doKingdomCreate;
	module.update = doKingdomUpdate;
	module.delete = doKingdomDelete;
	module.fetch = useKingdomFetch;
	module.page = fetchKingdomPage;
	module.param = "kingdom";
	return module.validate();
}

export {
	CreateKingdomModule,
};
