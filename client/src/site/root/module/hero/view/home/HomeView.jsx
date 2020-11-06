import {useHeroFetch} from "redux/hero/redux";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";
import CommonHomeView from "site/root/view/common/CommonHomeView";

const HomeView = () => {
	return (
		<CommonHomeView
			base={HeroView}
			context={HeroContext}
			param={"hero"}
			fetch={useHeroFetch}
			navigation={data => ({kingdom: data.kingdom})}
			menu={"root.hero"}
		>
			{data => null}
		</CommonHomeView>
	);
};

export default HomeView;
