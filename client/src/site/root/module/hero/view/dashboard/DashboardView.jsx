import BaseDashboardView from "component/view/BaseDashboardView";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import HeroView from "site/root/module/hero/view/HeroView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={HeroView}
			id={"root.hero"}
			icon={<HeroIcon/>}
		>
		</BaseDashboardView>
	);
};

export default DashboardView;
