import HeroRedux from "redux/hero/redux";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import DashboardViewWithAttributes from "site/root/view/DashboardViewWithAttributes";

const HeroView = () => {
	return (
		<DashboardViewWithAttributes
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
