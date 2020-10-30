import BaseRoutes from "component/route/BaseRoutes";
import {BuildingRoute} from "site/root/module/building/site/Router";
import {HeroRoute} from "site/root/module/hero/site/Router";
import DashboardView from "site/root/module/kingdom-context/view/dashboard/DashboardView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.kingdomContext.dashboard.match(), <DashboardView/>),
				HeroRoute(),
				BuildingRoute(),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const KingdomContextRoute = () => route(Routes.root.kingdomContext.match(), <Router/>);

export {
	KingdomContextRoute,
};
