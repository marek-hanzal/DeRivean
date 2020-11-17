import ModuleContext from "component/ModuleContext";
import CommonCreateView from "site/common/view/CommonCreateView";
import HeroView from "site/root/module/hero/view/HeroView";

const CreateView = () => {
	return (
		<HeroView>
			<ModuleContext.Consumer>
				{({parent}) => (
					<CommonCreateView
						param={parent}
						defaultEnableSubmit={true}
					/>
				)}
			</ModuleContext.Consumer>
		</HeroView>
	);
};

export default CreateView;
