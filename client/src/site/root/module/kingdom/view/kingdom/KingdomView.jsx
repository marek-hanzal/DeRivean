import KingdomRedux from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import DashboardViewWithAttributes from "site/root/view/DashboardViewWithAttributes";

const KingdomView = () => {
	return (
		<DashboardViewWithAttributes
			id={"root.kingdom"}
			formName={"kingdom"}
			redux={KingdomRedux}
			param={"kingdom"}
			menu={"root.kingdom"}
			open={["root.hero", "root.building"]}
			icon={<KingdomIcon/>}
		/>
	);
};

export default KingdomView;
