import BaseDashboardView from "component/view/BaseDashboardView";
import {BaseHeroView, HeroContext} from "site/root/module/hero/view/BaseHeroView";

const DashboardView = () => {
	return (
		<BaseHeroView>
			<BaseDashboardView
				context={HeroContext}
				menu={"root.hero.dashboard"}
			>
			</BaseDashboardView>
		</BaseHeroView>
	);
};

export default DashboardView;
