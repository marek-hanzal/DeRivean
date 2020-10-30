import BaseDashboardView from "component/view/BaseDashboardView";
import BuildingView from "site/root/module/building/view/BuildingView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={BuildingView}
			id={"root.kingdomContext.building"}
		/>
	);
};

export default DashboardView;
