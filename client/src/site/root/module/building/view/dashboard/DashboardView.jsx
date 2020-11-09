import BaseDashboardView from "component/view/BaseDashboardView";
import {useParams} from "react-router";
import {useKingdomStatisticsFetch} from "redux/kingdom/redux";
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
				children={
					<BuildingStatistics show={["buildings"]} action={(onSuccess, onFailure, onReason) => {
						// eslint-disable-next-line
						useKingdomStatisticsFetch(params.kingdom, onSuccess, onFailure, onReason);
					}}/>
				}
			/>
		</BuildingView>
	);
};

export default DashboardView;
