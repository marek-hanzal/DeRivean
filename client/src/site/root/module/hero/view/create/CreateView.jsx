import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";
import CreateViewWithAttributes from "site/root/view/common/CreateViewWithAttributes";

const CreateView = () => {
	return (
		<HeroView>
			<CreateViewWithAttributes
				context={HeroContext}
				param={"kingdom"}
				enableSubmit={true}
			/>
		</HeroView>
	);
};

export default CreateView;
