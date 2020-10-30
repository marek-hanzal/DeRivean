import BaseCreateView from "component/view/BaseCreateView";
import HeroView from "site/root/module/hero/view/HeroView";

const CreateView = () => {
	return (
		<BaseCreateView
			id={"root.hero"}
			base={HeroView}
		>
		</BaseCreateView>
	);
};

export default CreateView;
