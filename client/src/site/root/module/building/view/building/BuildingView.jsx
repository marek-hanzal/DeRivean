import BuildingRedux from "redux/building/redux";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const BuildingView = () => {
	return (
		<EditViewWithAttributes
			id={"root.building"}
			formName={"building"}
			redux={BuildingRedux}
			param={"building"}
			open={[]}
			icon={<BuildingIcon/>}
			enableSubmit={true}
		/>
	);
};

export default BuildingView;
