import {BaseHeroView, HeroContext} from "site/root/module/hero/view/BaseHeroView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	return (
		<BaseHeroView>
			<CreateViewWithAttributes
				context={HeroContext}
				formName={"hero"}
				param={"kingdom"}
				enableSubmit={true}
			/>
		</BaseHeroView>
	);
};

export default CreateView;
