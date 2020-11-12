import ModuleContext from "component/ModuleContext";
import CommonCreateView from "site/common/view/CommonCreateView";
import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import HeroView from "site/root/module/hero/view/HeroView";

const CreateView = () => {
	return (
		<HeroView>
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
		</HeroView>
	);
};

export default CreateView;
