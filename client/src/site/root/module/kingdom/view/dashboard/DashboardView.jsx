import BaseDashboardView from "component/view/BaseDashboardView";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/kingdom/view/KingdomView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={KingdomView}
			id={"root.kingdom"}
			icon={<KingdomIcon/>}
		>
			<h1>Kingdom dashboard</h1>
		</BaseDashboardView>
	);
};

export default DashboardView;
