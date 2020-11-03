import BaseDashboardView from "component/view/BaseDashboardView";
import {BaseKingdomView, KingdomContext} from "site/root/module/kingdom/view/BaseKingdomView";

const DashboardView = () => {
	return (
		<BaseKingdomView>
			<BaseDashboardView
				context={KingdomContext}
				menu={"root.kingdom.dashboard"}
			>
				<h1>Kingdom dashboard</h1>
			</BaseDashboardView>
		</BaseKingdomView>
	);
};

export default DashboardView;
