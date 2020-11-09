import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	return (
		<BuildingView>
			<BuildingContext.Consumer>
				{(currentContext) => (
					<CommonCreateView
						context={BuildingContext}
						formName={"building"}
						param={currentContext.parentParam}
						defaultEnableSubmit={true}
					>
						<AttributeFieldEditor currentContext={currentContext}/>
					</CommonCreateView>
				)}
			</BuildingContext.Consumer>
		</BuildingView>
	);
};

export default CreateView;
