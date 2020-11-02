import HeroRedux from "redux/hero/redux";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import EditViewWithAttributes from "site/root/view/common/EditViewWithAttributes";

const HeroView = () => {
	return (
		<EditViewWithAttributes
			id={"root.hero"}
			formName={"hero"}
			redux={HeroRedux}
			param={"hero"}
			open={[]}
			icon={<HeroIcon/>}
		/>
	);
};

export default HeroView;
