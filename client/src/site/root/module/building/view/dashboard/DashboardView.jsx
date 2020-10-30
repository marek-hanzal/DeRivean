import BaseDashboardView from "component/view/BaseDashboardView";
import BuildingView from "site/root/module/building/view/BuildingView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={BuildingView}
			id={"root.building"}
		/>
	);
};

export default DashboardView;
