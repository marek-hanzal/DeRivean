import BaseDashboardView from "component/view/BaseDashboardView";
import {useParams} from "react-router";
import BuildingStatistics from "site/root/module/building/component/BuildingStatistics";
import BuildingView from "site/root/module/building/view/BuildingView";
import {useKingdomStatisticsFetch} from "site/root/module/kingdom/hook/hook";

const DashboardView = () => {
	const params = useParams();
	return (
		<BuildingView>
			<BaseDashboardView
				children={
					<BuildingStatistics show={["buildings"]} action={events => {
						// eslint-disable-next-line
						useKingdomStatisticsFetch(params.kingdom, events);
					}}/>
				}
			/>
		</BuildingView>
	);
};

export default DashboardView;
