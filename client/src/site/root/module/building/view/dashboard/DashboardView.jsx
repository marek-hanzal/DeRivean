import BaseDashboardView from "component/view/BaseDashboardView";
import {BaseBuildingView, BuildingContext} from "site/root/module/building/view/BaseBuildingView";

const DashboardView = () => {
	return (
		<BaseBuildingView>
			<BaseDashboardView
				context={BuildingContext}
				menu={"root.building.dashboard"}
			/>
		</BaseBuildingView>
	);
};

export default DashboardView;
