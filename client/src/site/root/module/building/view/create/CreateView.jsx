import {BaseBuildingView, BuildingContext} from "site/root/module/building/view/BaseBuildingView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	return (
		<BaseBuildingView>
			<CreateViewWithAttributes
				context={BuildingContext}
				formName={"building"}
				param={"kingdom"}
				enableSubmit={true}
			/>
		</BaseBuildingView>
	);
};

export default CreateView;
