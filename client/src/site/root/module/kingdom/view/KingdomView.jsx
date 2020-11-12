import ModuleContext from "component/ModuleContext";
import {CreateKingdomModule} from "site/root/module/kingdom/Module";
import RootView from "site/root/view/RootView";

const KingdomView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateKingdomModule()}
			children={<RootView {...props} children={children}/>}
		/>
	);
};

export default KingdomView;
