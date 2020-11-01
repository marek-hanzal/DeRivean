import KingdomRedux from "redux/kingdom/redux";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import KingdomView from "site/root/module/kingdom/view/KingdomView";
import CreateViewWithAttributes from "site/root/view/CreateViewWithAttributes";
import Routes from "site/Routes";

const CreateView = () => {
	return (
		<CreateViewWithAttributes
			id={"root.kingdom"}
			base={KingdomView}
			formName={"kingdom"}
			redux={KingdomRedux}
			icon={<KingdomIcon/>}
			param={"user"}
			dashboardLink={Routes.root.kingdomContext.dashboard.link}
		/>
	);
};

export default CreateView;
