import BaseDashboardView from "component/view/BaseDashboardView";
import BuildingView from "site/root/module/kingdom-context/module/building/view/BuildingView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={BuildingView}
			id={"root.kingdomContext.building"}
		/>
	);
};

export default DashboardView;
