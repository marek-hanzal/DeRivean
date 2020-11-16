import ModuleContext from "component/ModuleContext";
import {CreateAttributeGroupModule} from "site/root/module/attribute-group/Module";
import RootView from "site/root/view/RootView";

const AttributeGroupView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateAttributeGroupModule()}
			children={<RootView {...props} children={children}/>}
		/>
	);
};

export default AttributeGroupView;
