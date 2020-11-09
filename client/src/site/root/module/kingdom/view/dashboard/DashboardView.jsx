import BaseDashboardView from "component/view/BaseDashboardView";
import {useParams} from "react-router";
import {useUserStatisticsFetch} from "redux/user/redux";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const DashboardView = () => {
	const params = useParams();
	return (
		<KingdomView>
			<BaseDashboardView context={KingdomContext}>
				<KingdomStatistics show={["kingdoms", "buildings", "heroes"]} action={(onSuccess, onFailure, onReason) => {
					// eslint-disable-next-line
					useUserStatisticsFetch(params.user, onSuccess, onFailure, onReason);
				}}/>
			</BaseDashboardView>
		</KingdomView>
	);
};

export default DashboardView;
