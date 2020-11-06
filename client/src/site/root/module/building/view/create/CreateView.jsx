import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	return (
		<BuildingView>
			<CreateViewWithAttributes
				context={BuildingContext}
				formName={"building"}
				param={"kingdom"}
				defaultEnableSubmit={true}
			>
				{attributes => attributes}
			</CreateViewWithAttributes>
		</BuildingView>
	);
};

export default CreateView;
