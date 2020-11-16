import GroupIcon from "component/icon/GroupIcon";
import {doAttributeGroupCreate, doAttributeGroupDelete, doAttributeGroupUpdate, fetchAttributeGroupPage} from "site/root/module/attribute-group/action/action";
import {useAttributeGroupFetch} from "site/root/module/attribute-group/hook/hook";
import AttributeGroupView from "site/root/module/attribute-group/view/AttributeGroupView";
import Routes from "site/Routes";
import Module from "utils/Module";

class AttributeGroupModule extends Module {
}

function CreateAttributeGroupModule() {
	const module = new AttributeGroupModule("root.attribute-group");
	module.baseView = AttributeGroupView;
	module.icon = <GroupIcon/>;
	module.link = Routes.root.attributeGroup;
	module.create = doAttributeGroupCreate;
	module.update = doAttributeGroupUpdate;
	module.delete = doAttributeGroupDelete;
	module.fetch = useAttributeGroupFetch;
	module.page = fetchAttributeGroupPage;
	module.param = "attribute-group";
	return module.validate();
}

export {
	CreateAttributeGroupModule,
};
