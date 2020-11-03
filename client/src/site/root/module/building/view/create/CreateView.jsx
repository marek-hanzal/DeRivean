import {BuildingContext, BuildingView} from "site/root/module/building/view/BuildingView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	return (
		<BuildingView>
			<CreateViewWithAttributes
				context={BuildingContext}
				formName={"building"}
				param={"kingdom"}
				enableSubmit={true}
			/>
		</BuildingView>
	);
};

export default CreateView;
