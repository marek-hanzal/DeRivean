import HeroRedux from "redux/hero/redux";
import BuildingView from "site/root/module/building/view/BuildingView";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import CreateViewWithAttributes from "site/root/view/CreateViewWithAttributes";
import Routes from "site/Routes";

const CreateView = () => {
	return (
		<CreateViewWithAttributes
			id={"root.hero"}
			base={BuildingView}
			formName={"hero"}
			redux={HeroRedux}
			icon={<HeroIcon/>}
			param={"kingdom"}
			dashboardLink={Routes.root.heroContext.dashboard.link}
		/>
	);
};

export default CreateView;
