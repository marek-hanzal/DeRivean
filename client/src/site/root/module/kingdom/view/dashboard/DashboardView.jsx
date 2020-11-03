import BaseDashboardView from "component/view/BaseDashboardView";
import {KingdomContext, KingdomView} from "site/root/module/kingdom/view/KingdomView";

const DashboardView = () => {
	return (
		<KingdomView>
			<BaseDashboardView context={KingdomContext}>
				<h1>Kingdom dashboard</h1>
			</BaseDashboardView>
		</KingdomView>
	);
};

export default DashboardView;
