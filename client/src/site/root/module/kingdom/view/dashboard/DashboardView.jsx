import BaseDashboardView from "component/view/BaseDashboardView";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomStatistics from "site/root/module/kingdom/component/KingdomStatistics";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const DashboardView = () => {
	return (
		<KingdomView>
			<BaseDashboardView context={KingdomContext}>
				<h1>Use user's statistics (these are global)</h1>
				<KingdomStatistics/>
			</BaseDashboardView>
		</KingdomView>
	);
};

export default DashboardView;
