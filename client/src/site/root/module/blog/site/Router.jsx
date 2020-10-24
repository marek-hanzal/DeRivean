import BaseRoutes from "component/route/BaseRoutes";
import Routes from "site/root/module/blog/site/Routes";
import CreateView from "site/root/module/blog/view/create/CreateView";
import DashboardView from "site/root/module/blog/view/dashboard/DashboardView";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.route.dashboard, <DashboardView/>),
			route(Routes.route.create, <CreateView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const BlogRoute = () => route(Routes.route.root, <Router/>);

export {
	BlogRoute,
};
