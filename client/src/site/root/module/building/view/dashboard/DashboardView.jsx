import BaseDashboardView from "component/view/BaseDashboardView";
import {useKingdomStatisticsFetch} from "redux/kingdom/redux";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingStatistics from "site/root/module/building/component/BuildingStatistics";
import BuildingView from "site/root/module/building/view/BuildingView";

const DashboardView = () => {
	return (
		<BuildingView>
			<BaseDashboardView
				context={BuildingContext}
				menu={"root.building.dashboard"}
			>
				<BuildingStatistics action={useKingdomStatisticsFetch}/>
			</BaseDashboardView>
		</BuildingView>
	);
};

export default DashboardView;
