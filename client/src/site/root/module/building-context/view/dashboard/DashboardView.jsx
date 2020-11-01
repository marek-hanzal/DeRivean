import BuildingRedux from "redux/building/redux";
import BuildingContextView from "site/root/module/building-context/view/BuildingContextView";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import DashboardViewWithAttributes from "site/root/view/DashboardViewWithAttributes";

const DashboardView = () => {
	return (
		<DashboardViewWithAttributes
			id={"root.buildingContext"}
			base={BuildingContextView}
			formName={"building"}
			redux={BuildingRedux}
			param={"building"}
			open={[]}
			icon={<BuildingIcon/>}
		/>
	);
};

export default DashboardView;
