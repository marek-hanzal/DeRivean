import {doTranslationCreate, doTranslationDelete, doTranslationUpdate, fetchTranslationPage} from "site/root/module/translation/action/action";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
import {useTranslationFetch} from "site/root/module/translation/hook/hook";
import TranslationView from "site/root/module/translation/view/TranslationView";
import Routes from "site/Routes";
import Module from "utils/Module";

function CreateTranslationModule() {
	const module = new Module("root.translation");
	module.baseView = TranslationView;
	module.icon = <TranslationIcon/>;
	module.link = Routes.root.translation;
	module.create = doTranslationCreate;
	module.update = doTranslationUpdate;
	module.delete = doTranslationDelete;
	module.fetch = useTranslationFetch;
	module.page = fetchTranslationPage;
	module.param = "translation";
	return module.validate();
}

export {
	CreateTranslationModule,
};
