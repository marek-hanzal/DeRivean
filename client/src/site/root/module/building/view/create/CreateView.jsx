import BuildingRedux from "redux/building/redux";
import CreateViewWithAttributes from "site/root/component/CreateViewWithAttributes";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import BuildingView from "site/root/module/building/view/BuildingView";
import Routes from "site/Routes";

const CreateView = () => {
	return (
		<CreateViewWithAttributes
			id={"root.building"}
			base={BuildingView}
			formName={"building"}
			redux={BuildingRedux}
			icon={<BuildingIcon/>}
			param={"kingdom"}
			dashboardLink={Routes.root.buildingContext.dashboard.link}
		/>
	);
};

export default CreateView;
