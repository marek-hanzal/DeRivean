import BaseDashboardView from "component/view/BaseDashboardView";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/user-context/module/kingdom/view/KingdomView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={KingdomView}
			id={"root.userContext.kingdom"}
			icon={<KingdomIcon/>}
		>
			<h1>Kingdom dashboard</h1>
		</BaseDashboardView>
	);
};

export default DashboardView;
