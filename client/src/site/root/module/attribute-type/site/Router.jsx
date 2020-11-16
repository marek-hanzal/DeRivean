import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/attribute-type/view/create/CreateView";
import DashboardView from "site/root/module/attribute-type/view/dashboard/DashboardView";
import EditView from "site/root/module/attribute-type/view/edit/EditView";
import HomeView from "site/root/module/attribute-type/view/home/HomeView";
import ListView from "site/root/module/attribute-type/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.root.attributeType;

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(links.dashboard.match(), <DashboardView/>),
				route(links.home.match(), <HomeView/>),
				route(links.create.match(), <CreateView/>),
				route(links.edit.match(), <EditView/>),
				route(links.list.match(), <ListView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const AttributeTypeRoute = () => route(links.match(), <Router/>);

export {
	AttributeTypeRoute,
};
