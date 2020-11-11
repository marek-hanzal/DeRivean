import BaseDashboardView from "component/view/BaseDashboardView";
import {useUserStatisticsFetch} from "hook.js";
import {useParams} from "react-router";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const DashboardView = () => {
	const params = useParams();
	return (
		<KingdomView>
			<BaseDashboardView context={KingdomContext}>
				<KingdomStatistics show={["kingdoms", "buildings", "heroes"]} action={events => {
					// eslint-disable-next-line
					useUserStatisticsFetch(params.user, events);
				}}/>
			</BaseDashboardView>
		</KingdomView>
	);
};

export default DashboardView;
