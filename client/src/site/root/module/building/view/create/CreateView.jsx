import BaseCreateView from "component/view/BaseCreateView";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import BuildingView from "site/root/module/building/view/BuildingView";

const CreateView = () => {
	return (
		<BaseCreateView
			base={BuildingView}
			id={"root.building"}
			icon={<BuildingIcon/>}
		/>
	);
};

export default CreateView;
