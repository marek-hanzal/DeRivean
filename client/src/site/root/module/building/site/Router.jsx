import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/building/view/create/CreateView";
import DashboardView from "site/root/module/building/view/dashboard/DashboardView";
import EditView from "site/root/module/building/view/edit/EditView";
import HomeView from "site/root/module/building/view/home/HomeView";
import ListView from "site/root/module/building/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.root.building;

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(links.dashboard.match(), <DashboardView/>),
				route(links.create.match(), <CreateView/>),
				route(links.list.match(), <ListView/>),
				route(links.home.match(), <HomeView/>),
				route(links.edit.match(), <EditView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const BuildingRoute = () => route(links.match(), <Router/>);

export {
	BuildingRoute,
};
