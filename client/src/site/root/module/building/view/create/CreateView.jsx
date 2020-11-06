import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import BuildingContext from "site/root/module/building/component/BuildingContext";
import BuildingView from "site/root/module/building/view/BuildingView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	return (
		<BuildingView>
			<BuildingContext.Consumer>
				{({id, redux}) => (
					<CommonCreateView
						context={BuildingContext}
						formName={"building"}
						param={"kingdom"}
						defaultEnableSubmit={true}
					>
						<AttributeFieldEditor translation={id} redux={redux}/>
					</CommonCreateView>
				)}
			</BuildingContext.Consumer>
		</BuildingView>
	);
};

export default CreateView;
