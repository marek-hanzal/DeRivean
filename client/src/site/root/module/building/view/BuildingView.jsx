import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import {doBuildingCreate, doBuildingDelete, doBuildingUpdate, useBuildingAttributesFetch, useBuildingFetch} from "site/root/module/building/redux/redux";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const BuildingView = (
	{
		children,
		...props
	}) => {
	return (
		<BuildingContext.Provider
			value={{
				base: BuildingView,
				icon: <BuildingIcon/>,
				id: "root.building",
				link: Routes.root.building,
				create: doBuildingCreate,
				update: doBuildingUpdate,
				delete: doBuildingDelete,
				fetch: useBuildingFetch,
				attributes: useBuildingAttributesFetch,
				param: "building",
				parentParam: "kingdom",
			}}
			children={<RootView context={BuildingContext} {...props} children={children}/>}
		/>
	);
};

export default BuildingView;
