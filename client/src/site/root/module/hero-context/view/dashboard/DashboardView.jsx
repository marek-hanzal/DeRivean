import HeroRedux from "redux/hero/redux";
import HeroContextView from "site/root/module/hero-context/view/HeroContextView";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import DashboardViewWithAttributes from "site/root/view/DashboardViewWithAttributes";

const DashboardView = () => {
	return (
		<DashboardViewWithAttributes
			id={"root.heroContext"}
			base={HeroContextView}
			formName={"hero"}
			redux={HeroRedux}
			param={"hero"}
			open={[]}
			icon={<HeroIcon/>}
		/>
	);
};

export default DashboardView;
