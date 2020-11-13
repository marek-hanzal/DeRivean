import BaseDashboardView from "component/view/BaseDashboardView";
import {useParams} from "react-router";
import BuildingStatistics from "site/game/module/building/component/BuildingStatistics";
import BuildingView from "site/game/module/building/view/BuildingView";
import {useKingdomStatisticsFetch} from "site/game/module/kingdom/hook/hook";

const DashboardView = () => {
	const params = useParams();
	return (
		<BuildingView>
			<BaseDashboardView
				children={
					<BuildingStatistics show={["buildings", "buildings.built"]} action={events => {
						// eslint-disable-next-line
						useKingdomStatisticsFetch(params.kingdom, events);
					}}/>
				}
			/>
		</BuildingView>
	);
};

export default DashboardView;
