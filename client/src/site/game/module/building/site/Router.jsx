import BaseRoutes from "component/route/BaseRoutes";
import DashboardView from "site/game/module/building/view/dashboard/DashboardView";
import ListView from "site/game/module/building/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.game.building;

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(links.dashboard.match(), <DashboardView/>),
				route(links.list.match(), <ListView/>),
				// route(links.home.match(), <HomeView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const BuildingRoute = () => route(links.match(), <Router/>);

export {
	BuildingRoute,
};
