import BaseRoutes from "component/route/BaseRoutes";
import {KingdomRoute} from "site/root/module/kingdom/site/Router";
import DashboardView from "site/root/module/user-context/view/dashboard/DashboardView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.userContext.dashboard.match(), <DashboardView/>),
			KingdomRoute(),
			route("*", <NotFoundView/>),
		]}
	/>
;

const UserContextRoute = () => route(Routes.root.userContext.match(), <Router/>);

export {
	UserContextRoute,
};
