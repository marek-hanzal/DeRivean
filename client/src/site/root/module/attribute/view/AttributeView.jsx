import ModuleContext from "component/ModuleContext";
import {CreateAttributeModule} from "site/root/module/attribute/Module";
import RootView from "site/root/view/RootView";

const AttributeView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateAttributeModule()}
			children={<RootView {...props} children={children}/>}
		/>
	);
};

export default AttributeView;
