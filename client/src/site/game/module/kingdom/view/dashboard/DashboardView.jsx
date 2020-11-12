import BaseDashboardView from "component/view/BaseDashboardView";
import KingdomView from "site/game/module/kingdom/view/KingdomView";

const DashboardView = () => {
	return (
		<KingdomView>
			<BaseDashboardView>
			</BaseDashboardView>
		</KingdomView>
	);
};

export default DashboardView;
