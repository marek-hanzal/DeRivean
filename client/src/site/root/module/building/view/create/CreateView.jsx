import ModuleContext from "component/ModuleContext";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import BuildingView from "site/root/module/building/view/BuildingView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	return (
		<BuildingView>
			<ModuleContext.Consumer>
				{({parent}) => (
					<CommonCreateView
						param={parent}
						defaultEnableSubmit={true}
						readyCount={1}
						children={<AttributeFieldEditor/>}
					/>
				)}
			</ModuleContext.Consumer>
		</BuildingView>
	);
};

export default CreateView;
