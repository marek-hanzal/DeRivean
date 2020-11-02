import BaseDashboardView from "component/view/BaseDashboardView";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import RootView from "site/root/view/RootView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={RootView}
			id={"root.building"}
			icon={<BuildingIcon/>}
			menu={"root.building.dashboard"}
		/>
	);
};

export default DashboardView;
