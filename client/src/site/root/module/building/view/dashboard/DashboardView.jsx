import BaseDashboardView from "component/view/BaseDashboardView";
import {useParams} from "react-router";
import {KingdomRedux} from "redux/kingdom/redux";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingStatistics from "site/root/module/building/component/BuildingStatistics";
import BuildingView from "site/root/module/building/view/BuildingView";

const DashboardView = () => {
	const params = useParams();
	return (
		<BuildingView>
			<BaseDashboardView
				context={BuildingContext}
				menu={"root.building.dashboard"}
			>
				<BuildingStatistics action={cancelToken => KingdomRedux.redux.statistics.dispatch.fetch(params.kingdom, cancelToken)}/>
			</BaseDashboardView>
		</BuildingView>
	);
};

export default DashboardView;
