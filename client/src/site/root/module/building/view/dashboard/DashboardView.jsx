import BaseDashboardView from "component/view/BaseDashboardView";
import {BuildingContext, BuildingView} from "site/root/module/building/view/BuildingView";

const DashboardView = () => {
	return (
		<BuildingView>
			<BaseDashboardView
				context={BuildingContext}
				menu={"root.building.dashboard"}
			/>
		</BuildingView>
	);
};

export default DashboardView;
