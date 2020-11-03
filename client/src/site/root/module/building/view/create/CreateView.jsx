import {BuildingRedux} from "redux/building/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";
import RootView from "site/root/view/RootView";
import Routes from "site/Routes";

const CreateView = () => {
	return (
		<CreateViewWithAttributes
			id={"root.building"}
			base={RootView}
			formName={"building"}
			redux={BuildingRedux}
			icon={<BuildingIcon/>}
			param={"kingdom"}
			dashboardLink={Routes.root.building.building.link}
			enableSubmit={true}
		/>
	);
};

export default CreateView;
