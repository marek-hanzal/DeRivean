import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/hero/view/create/CreateView";
import DashboardView from "site/root/module/hero/view/dashboard/DashboardView";
import ListView from "site/root/module/hero/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.kingdomContext.hero.dashboard.match(), <DashboardView/>),
				route(Routes.root.kingdomContext.hero.list.match(), <ListView/>),
				route(Routes.root.kingdomContext.hero.create.match(), <CreateView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const HeroRoute = () => route(Routes.root.kingdomContext.hero.match(), <Router/>);

export {
	HeroRoute,
};