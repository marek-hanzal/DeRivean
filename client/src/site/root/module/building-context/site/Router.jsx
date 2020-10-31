import BaseRoutes from "component/route/BaseRoutes";
import DashboardView from "site/root/module/building-context/view/dashboard/DashboardView";
import {BuildingRoute} from "site/root/module/building/site/Router";
import {HeroRoute} from "site/root/module/hero/site/Router";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.buildingContext.dashboard.match(), <DashboardView/>),
				HeroRoute(),
				BuildingRoute(),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const BuildingContextRoute = () => route(Routes.root.buildingContext.match(), <Router/>);

export {
	BuildingContextRoute,
};
