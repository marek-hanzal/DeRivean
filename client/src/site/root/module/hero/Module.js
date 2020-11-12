import HeroIcon from "site/common/icon/HeroIcon";
import {doHeroCreate, doHeroDelete, doHeroUpdate, fetchHeroPage} from "site/root/module/hero/action/action";
import {useHeroAttributesFetch, useHeroFetch} from "site/root/module/hero/hook/hook";
import HeroView from "site/root/module/hero/view/HeroView";
import Routes from "site/Routes";
import Module from "utils/Module";

class HeroModule extends Module {
	attributes;

	constructor(id) {
		super(id);
		this.validateFields.push("attributes");
	}
}

function CreateHeroModule() {
	const module = new HeroModule("root.hero");
	module.baseView = HeroView;
	module.icon = <HeroIcon/>;
	module.link = Routes.root.hero;
	module.create = doHeroCreate;
	module.update = doHeroUpdate;
	module.delete = doHeroDelete;
	module.fetch = useHeroFetch;
	module.page = fetchHeroPage;
	module.param = "hero";
	module.parent = "kingdom";
	module.attributes = useHeroAttributesFetch;
	return module.validate();
}

export {
	CreateHeroModule,
};
