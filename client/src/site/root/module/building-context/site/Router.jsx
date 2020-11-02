import BaseRoutes from "component/route/BaseRoutes";
import {BuildingRoute} from "site/root/module/building/site/Router";
import BuildingView from "site/root/module/building/view/building/BuildingView";
import {HeroRoute} from "site/root/module/hero/site/Router";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.building.context.building.match(), <BuildingView/>),
				HeroRoute(),
				BuildingRoute(),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const BuildingContextRoute = () => route(Routes.root.building.context.match(), <Router/>);

export {
	BuildingContextRoute,
};
