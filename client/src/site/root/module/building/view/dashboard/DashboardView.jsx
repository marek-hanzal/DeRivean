import BaseDashboardView from "component/view/BaseDashboardView";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import BuildingView from "site/root/module/building/view/BuildingView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={BuildingView}
			id={"root.building"}
			icon={<BuildingIcon/>}
		/>
	);
};

export default DashboardView;
