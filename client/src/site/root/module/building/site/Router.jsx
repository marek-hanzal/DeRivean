import BaseRoutes from "component/route/BaseRoutes";
import BuildingView from "site/root/module/building/view/building/BuildingView";
import CreateView from "site/root/module/building/view/create/CreateView";
import DashboardView from "site/root/module/building/view/dashboard/DashboardView";
import ListView from "site/root/module/building/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.building.dashboard.match(), <DashboardView/>),
				route(Routes.root.building.create.match(), <CreateView/>),
				route(Routes.root.building.list.match(), <ListView/>),
				route(Routes.root.building.building.match(), <BuildingView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const BuildingRoute = () => route(Routes.root.building.match(), <Router/>);

export {
	BuildingRoute,
};
