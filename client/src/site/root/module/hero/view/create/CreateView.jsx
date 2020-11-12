import ModuleContext from "component/ModuleContext";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import HeroView from "site/root/module/hero/view/HeroView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	return (
		<HeroView>
			<ModuleContext.Consumer>
				{({parentParam}) => (
					<CommonCreateView
						param={parentParam}
						defaultEnableSubmit={true}
						readyCount={1}
						children={<AttributeFieldEditor/>}
					/>
				)}
			</ModuleContext.Consumer>
		</HeroView>
	);
};

export default CreateView;
