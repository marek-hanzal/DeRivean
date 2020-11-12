import CommonHomeView from "site/common/view/CommonHomeView";
import HeroView from "site/root/module/hero/view/HeroView";

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
