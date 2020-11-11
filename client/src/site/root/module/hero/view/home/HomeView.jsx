import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	return (
		<HeroView>
			<CommonHomeView
				context={HeroContext}
				navigation={data => ({kingdom: data.kingdom})}
				menu={"root.hero"}
			>
				{data => null}
			</CommonHomeView>
		</HeroView>
	);
};

export default HomeView;
