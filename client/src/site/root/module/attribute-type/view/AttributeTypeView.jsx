import ModuleContext from "component/ModuleContext";
import {CreateAttributeTypeModule} from "site/root/module/attribute-type/Module";
import RootView from "site/root/view/RootView";

const AttributeTypeView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateAttributeTypeModule()}
			children={<RootView {...props} children={children}/>}
		/>
	);
};

export default AttributeTypeView;
