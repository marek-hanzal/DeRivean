import BaseRoutes from "component/route/BaseRoutes";
import Routes from "site/root/module/user-context/site/Routes";
import DashboardView from "site/root/module/user-context/view/context/DashboardView";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.route.dashboard, <DashboardView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const UserContextRoute = () => route(Routes.route.root, <Router/>);

export {
	UserContextRoute,
};
