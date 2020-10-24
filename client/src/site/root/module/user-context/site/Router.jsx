import BaseRoutes from "component/route/BaseRoutes";
import DashboardView from "site/root/module/user-context/view/dashboard/DashboardView";
import KingdomView from "site/root/module/user-context/view/kingdom/KingdomView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.userContext.dashboard.match(), <DashboardView/>),
			route(Routes.root.userContext.kingdom.match(), <KingdomView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const UserContextRoute = () => route(Routes.root.userContext.match(), <Router/>);

export {
	UserContextRoute,
};
