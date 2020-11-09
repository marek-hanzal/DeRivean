import AttributeFieldEditor from "site/root/component/AttributeFieldEditor";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";
import CommonCreateView from "site/root/view/common/CommonCreateView";

const CreateView = () => {
	return (
		<HeroView>
			<HeroContext.Consumer>
				{(currentContext) => (
					<CommonCreateView
						context={HeroContext}
						param={currentContext.parentParam}
						defaultEnableSubmit={true}
						readyCount={1}
						children={<AttributeFieldEditor translation={currentContext.id} currentContext={currentContext}/>}
					/>
				)}
			</HeroContext.Consumer>
		</HeroView>
	);
};

export default CreateView;
