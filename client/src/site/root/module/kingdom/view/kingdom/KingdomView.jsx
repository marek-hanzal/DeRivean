import KingdomRedux from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import DashboardViewWithAttributes from "site/root/view/DashboardViewWithAttributes";
import RootView from "site/root/view/RootView";

const KingdomView = () => {
	return (
		<DashboardViewWithAttributes
			id={"root.kingdomContext"}
			base={RootView}
			formName={"kingdom"}
			redux={KingdomRedux}
			param={"kingdom"}
			open={["root.hero", "root.building"]}
			icon={<KingdomIcon/>}
		/>
	);
};

export default KingdomView;
