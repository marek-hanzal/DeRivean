import BaseRoutes from "component/route/BaseRoutes";
import {BuildingRoute} from "site/root/module/building/site/Router";
import {HeroRoute} from "site/root/module/hero/site/Router";
import CreateView from "site/root/module/kingdom/view/create/CreateView";
import DashboardView from "site/root/module/kingdom/view/dashboard/DashboardView";
import KingdomView from "site/root/module/kingdom/view/kingdom/KingdomView";
import ListView from "site/root/module/kingdom/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.kingdom.dashboard.match(), <DashboardView/>),
				route(Routes.root.kingdom.create.match(), <CreateView/>),
				route(Routes.root.kingdom.list.match(), <ListView/>),
				route(Routes.root.kingdom.kingdom.match(), <KingdomView/>),
				HeroRoute(),
				BuildingRoute(),
				// route("*", <NotFoundView/>),
				route("*", <h1>bpooooom</h1>),
			]}
		/>
	);
};

const KingdomRoute = () => route(Routes.root.kingdom.match(), <Router/>);

export {
	KingdomRoute,
};
