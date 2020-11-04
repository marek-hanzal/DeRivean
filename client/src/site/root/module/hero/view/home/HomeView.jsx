import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const HomeView = () => {
	return (
		<HeroView>
			<EditViewWithAttributes
				context={HeroContext}
				param={"hero"}
				enableSubmit={true}
			/>
		</HeroView>
	);
};

export default HomeView;