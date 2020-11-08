import BaseDashboardView from "component/view/BaseDashboardView";
import {useKingdomStatisticsFetch} from "redux/kingdom/redux";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const DashboardView = () => {
	return (
		<KingdomView>
			<BaseDashboardView context={KingdomContext}>
				<KingdomStatistics show={["kingdoms", "buildings", "heroes"]} action={useKingdomStatisticsFetch}/>
			</BaseDashboardView>
		</KingdomView>
	);
};

export default DashboardView;
