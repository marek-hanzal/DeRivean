import KingdomRedux from "redux/kingdom/redux";
import KingdomContextView from "site/root/module/kingdom-context/view/KingdomContextView";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import DashboardViewWithAttributes from "site/root/view/DashboardViewWithAttributes";

const DashboardView = () => {
	return (
		<DashboardViewWithAttributes
			id={"root.kingdomContext"}
			base={KingdomContextView}
			formName={"kingdom"}
			redux={KingdomRedux}
			param={"kingdom"}
			open={["root.hero", "root.building"]}
			icon={<KingdomIcon/>}
		/>
	);
};

export default DashboardView;
