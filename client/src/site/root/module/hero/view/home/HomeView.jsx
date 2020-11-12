import HeroView from "site/root/module/hero/view/HeroView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	return (
		<HeroView>
			<CommonHomeView
				menu={"root.hero"}
			>
				{data => null}
			</CommonHomeView>
		</HeroView>
	);
};

export default HomeView;
