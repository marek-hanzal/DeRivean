import BaseCreateView from "component/view/BaseCreateView";
import BuildingView from "site/root/module/kingdom-context/module/building/view/BuildingView";

const CreateView = () => {
	return (
		<BaseCreateView
			base={BuildingView}
			id={"root.kingdomContext.building"}
		/>
	);
};

export default CreateView;
