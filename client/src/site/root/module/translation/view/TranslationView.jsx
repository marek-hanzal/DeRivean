import ModuleContext from "component/ModuleContext";
import {CreateTranslationModule} from "site/root/module/translation/Module";
import RootView from "site/root/view/RootView";

const TranslationView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateTranslationModule()}
			children={<RootView {...props} children={children}/>}
		/>
	);
};

export default TranslationView;
