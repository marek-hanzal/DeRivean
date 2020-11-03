import {HeroContext, HeroView} from "site/root/module/hero/view/HeroView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	return (
		<HeroView>
			<CreateViewWithAttributes
				context={HeroContext}
				formName={"hero"}
				param={"kingdom"}
				enableSubmit={true}
			/>
		</HeroView>
	);
};

export default CreateView;
