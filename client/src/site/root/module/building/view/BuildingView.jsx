import ModuleContext from "component/ModuleContext";
import {CreateBuildingModule} from "site/root/module/building/Module";
import RootView from "site/root/view/RootView";

const BuildingView = (
	{
		children,
		...props
	}) => {
	return (
		<ModuleContext.Provider
			value={CreateBuildingModule()}
			children={<RootView {...props} children={children}/>}
		/>
	);
};

export default BuildingView;
