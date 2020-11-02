import BaseDashboardView from "component/view/BaseDashboardView";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import RootView from "site/root/view/RootView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={RootView}
			id={"root.kingdom"}
			menu={"root.kingdom.dashboard"}
			icon={<KingdomIcon/>}
		>
			<h1>Kingdom dashboard</h1>
		</BaseDashboardView>
	);
};

export default DashboardView;
