import BaseCreateView from "component/view/BaseCreateView";
import BuildingView from "site/root/module/building/view/BuildingView";

const CreateView = () => {
	return (
		<BaseCreateView
			base={BuildingView}
			id={"root.building"}
		/>
	);
};

export default CreateView;
