import BaseDashboardView from "component/view/BaseDashboardView";
import {useParams} from "react-router";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import {useUserStatisticsFetch} from "site/root/module/user/hook/hook";

const DashboardView = () => {
	const params = useParams();
	return (
		<KingdomView>
			<BaseDashboardView>
				<KingdomStatistics show={["kingdoms", "buildings", "heroes"]} action={events => {
					// eslint-disable-next-line
					useUserStatisticsFetch(params.user, events);
				}}/>
			</BaseDashboardView>
		</KingdomView>
	);
};

export default DashboardView;
