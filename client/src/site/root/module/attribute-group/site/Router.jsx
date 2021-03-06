import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/attribute-group/view/create/CreateView";
import DashboardView from "site/root/module/attribute-group/view/dashboard/DashboardView";
import EditView from "site/root/module/attribute-group/view/edit/EditView";
import HomeView from "site/root/module/attribute-group/view/home/HomeView";
import ListView from "site/root/module/attribute-group/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.root.attributeGroup;

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

const AttributeGroupRoute = () => route(links.match(), <Router/>);

export {
	AttributeGroupRoute,
};
