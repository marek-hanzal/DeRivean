import BuildingRedux from "redux/building/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import DashboardViewWithAttributes from "site/root/view/DashboardViewWithAttributes";

const BuildingView = () => {
	return (
		<DashboardViewWithAttributes
			id={"root.buildingContext"}
			formName={"building"}
			redux={BuildingRedux}
			param={"building"}
			open={[]}
			icon={<BuildingIcon/>}
		/>
	);
};

export default BuildingView;
