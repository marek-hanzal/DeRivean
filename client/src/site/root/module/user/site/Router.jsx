import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/user/view/create/CreateView";
import DashboardView from "site/root/module/user/view/dashboard/DashboardView";
import AttributesView from "site/root/module/user/view/edit/AttributesView";
import EditView from "site/root/module/user/view/edit/EditView";
import HomeView from "site/root/module/user/view/home/HomeView";
import ListView from "site/root/module/user/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.root.user;

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(links.dashboard.match(), <DashboardView/>),
				route(links.create.match(), <CreateView/>),
				route(links.edit.match(), <EditView/>),
				route(links.attributes.match(), <AttributesView/>),
				route(links.list.match(), <ListView/>),
				route(links.home.match(), <HomeView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const UserRoute = () => route(links.match(), <Router/>);

export {
	UserRoute,
};
