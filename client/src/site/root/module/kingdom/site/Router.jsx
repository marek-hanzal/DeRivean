import BaseRoutes from "component/route/BaseRoutes";
import CommonView from "site/root/module/kingdom/view/attributes/CommonView";
import ResourcesView from "site/root/module/kingdom/view/attributes/ResourcesView";
import CreateView from "site/root/module/kingdom/view/create/CreateView";
import DashboardView from "site/root/module/kingdom/view/dashboard/DashboardView";
import EditView from "site/root/module/kingdom/view/edit/EditView";
import HomeView from "site/root/module/kingdom/view/home/HomeView";
import ListView from "site/root/module/kingdom/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.root.kingdom;

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(links.dashboard.match(), <DashboardView/>),
				route(links.create.match(), <CreateView/>),
				route(links.list.match(), <ListView/>),
				route(links.home.match(), <HomeView/>),
				route(links.edit.match(), <EditView/>),
				route(links.attributes.common.match(), <CommonView/>),
				route(links.attributes.resources.match(), <ResourcesView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const KingdomRoute = () => route(links.match(), <Router/>);

export {
	KingdomRoute,
};
