import BaseDashboardView from "component/view/BaseDashboardView";
import {HeroContext, HeroView} from "site/root/module/hero/view/HeroView";

const DashboardView = () => {
	return (
		<HeroView>
			<BaseDashboardView context={HeroContext}/>
		</HeroView>
	);
};

export default DashboardView;
