import KingdomRedux from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const KingdomView = () => {
	return (
		<EditViewWithAttributes
			id={"root.kingdom"}
			formName={"kingdom"}
			redux={KingdomRedux}
			param={"kingdom"}
			menu={"root.kingdom"}
			open={["root.hero", "root.building"]}
			icon={<KingdomIcon/>}
			enableSubmit={true}
		/>
	);
};

export default KingdomView;
