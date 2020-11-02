import HeroRedux from "redux/hero/redux";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import DashboardViewWithAttributes from "site/root/view/DashboardViewWithAttributes";
import RootView from "site/root/view/RootView";

const HeroView = () => {
	return (
		<DashboardViewWithAttributes
			base={RootView}
			id={"root.heroContext"}
			formName={"hero"}
			redux={HeroRedux}
			param={"hero"}
			open={[]}
			icon={<HeroIcon/>}
		/>
	);
};

export default HeroView;
