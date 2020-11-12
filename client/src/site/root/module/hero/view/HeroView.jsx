import ModuleContext from "component/ModuleContext";
import {CreateHeroModule} from "site/root/module/hero/Module";
import RootView from "site/root/view/RootView";

const HeroView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateHeroModule()}
			children={<RootView {...props} children={children}/>}
		/>
	);
};

export default HeroView;
