import BaseDashboardView from "component/view/BaseDashboardView";
import KingdomContext from "site/root/module/kingdom/component/KingdomContext";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

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
