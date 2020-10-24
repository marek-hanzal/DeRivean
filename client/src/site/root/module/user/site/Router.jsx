import BaseRoutes from "component/route/BaseRoutes";
import Routes from "site/root/module/user/site/Routes";
import ContextView from "site/root/module/user/view/context/ContextView";
import CreateView from "site/root/module/user/view/create/CreateView";
import DashboardView from "site/root/module/user/view/dashboard/DashboardView";
import ListView from "site/root/module/user/view/list/ListView";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.route.dashboard, <DashboardView/>),
			route(Routes.route.create, <CreateView/>),
			route(Routes.route.list, <ListView/>),
			route(Routes.route.context, <ContextView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const UserRoute = () => route(Routes.route.root, <Router/>);

export {
	UserRoute,
};
