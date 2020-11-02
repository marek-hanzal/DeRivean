import BaseDashboardView from "component/view/BaseDashboardView";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import RootView from "site/root/view/RootView";

const DashboardView = () => {
	return (
		<BaseDashboardView
			base={RootView}
			id={"root.hero"}
			icon={<HeroIcon/>}
		>
		</BaseDashboardView>
	);
};

export default DashboardView;
