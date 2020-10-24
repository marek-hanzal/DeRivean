import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/blog/view/create/CreateView";
import DashboardView from "site/root/module/blog/view/dashboard/DashboardView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.blog.dashboard.match(), <DashboardView/>),
			route(Routes.root.blog.create.match(), <CreateView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const BlogRoute = () => route(Routes.root.blog.match(), <Router/>);

export {
	BlogRoute,
};
