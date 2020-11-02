import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/hero/view/create/CreateView";
import DashboardView from "site/root/module/hero/view/dashboard/DashboardView";
import HeroView from "site/root/module/hero/view/hero/HeroView";
import ListView from "site/root/module/hero/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.hero.dashboard.match(), <DashboardView/>),
				route(Routes.root.hero.list.match(), <ListView/>),
				route(Routes.root.hero.create.match(), <CreateView/>),
				route(Routes.root.hero.hero.match(), <HeroView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const HeroRoute = () => route(Routes.root.hero.match(), <Router/>);

export {
	HeroRoute,
};
