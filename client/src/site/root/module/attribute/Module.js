import AttributeIcon from "component/icon/AttributeIcon";
import {doAttributeCreate, doAttributeDelete, doAttributeUpdate, fetchAttributePage} from "site/root/module/attribute/action/action";
import {useAttributeAttributesFetch, useAttributeFetch} from "site/root/module/attribute/hook/hook";
import AttributeView from "site/root/module/attribute/view/AttributeView";
import Routes from "site/Routes";
import Module from "utils/Module";

class AttributeModule extends Module {
	attributes;

	constructor(id) {
		super(id);
		this.validateFields.push("attributes");
	}
}

function CreateAttributeModule() {
	const module = new AttributeModule("root.attribute");
	module.baseView = AttributeView;
	module.icon = <AttributeIcon/>;
	module.link = Routes.root.attribute;
	module.create = doAttributeCreate;
	module.update = doAttributeUpdate;
	module.delete = doAttributeDelete;
	module.fetch = useAttributeFetch;
	module.page = fetchAttributePage;
	module.param = "attribute";
	module.attributes = useAttributeAttributesFetch;
	return module.validate();
}

export {
	CreateAttributeModule,
};
