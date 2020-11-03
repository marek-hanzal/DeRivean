import BaseDashboardView from "component/view/BaseDashboardView";
import HeroContext from "site/root/module/hero/component/HeroContext";
import HeroView from "site/root/module/hero/view/HeroView";

const DashboardView = () => {
	return (
		<HeroView>
			<BaseDashboardView context={HeroContext}/>
		</HeroView>
	);
};

export default DashboardView;
