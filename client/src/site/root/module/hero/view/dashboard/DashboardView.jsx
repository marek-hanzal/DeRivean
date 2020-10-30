import BaseDashboardView from "component/view/BaseDashboardView";
import HeroView from "site/root/module/hero/view/HeroView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={HeroView}
			id={"root.kingdomContext.hero"}
			// icon={}
			title={".... CREATE HERO COMPONENTS ..."}
		>
		</BaseDashboardView>
	);
};

export default DashboardView;
