import BaseCreateView from "component/view/BaseCreateView";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import HeroView from "site/root/module/hero/view/HeroView";

const CreateView = () => {
	return (
		<BaseCreateView
			id={"root.hero"}
			base={HeroView}
			icon={<HeroIcon/>}
		>
		</BaseCreateView>
	);
};

export default CreateView;
