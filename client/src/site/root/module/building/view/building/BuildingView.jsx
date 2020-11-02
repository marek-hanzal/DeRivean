import BuildingRedux from "redux/building/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const BuildingView = () => {
	return (
		<EditViewWithAttributes
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
