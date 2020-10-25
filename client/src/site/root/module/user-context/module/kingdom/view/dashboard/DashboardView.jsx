import BaseDashboardView from "component/view/BaseDashboardView";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={KingdomView}
			id={"root.userContext.kingdom"}
		>
			<h1>Kingdom dashboard</h1>
		</BaseDashboardView>
	);
};

export default DashboardView;
