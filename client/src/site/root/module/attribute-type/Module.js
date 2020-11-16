import AttributeIcon from "component/icon/AttributeIcon";
import {doAttributeTypeCreate, doAttributeTypeDelete, doAttributeTypeUpdate, fetchAttributeTypePage} from "site/root/module/attribute-type/action/action";
import {useAttributeTypeFetch} from "site/root/module/attribute-type/hook/hook";
import AttributeTypeView from "site/root/module/attribute-type/view/AttributeTypeView";
import Routes from "site/Routes";
import Module from "utils/Module";

class AttributeTypeModule extends Module {
}

function CreateAttributeTypeModule() {
	const module = new AttributeTypeModule("root.attribute-type");
	module.baseView = AttributeTypeView;
	module.icon = <AttributeIcon/>;
	module.link = Routes.root.attributeType;
	module.create = doAttributeTypeCreate;
	module.update = doAttributeTypeUpdate;
	module.delete = doAttributeTypeDelete;
	module.fetch = useAttributeTypeFetch;
	module.page = fetchAttributeTypePage;
	module.param = "type";
	module.parent = "group";
	return module.validate();
}

export {
	CreateAttributeTypeModule,
};
