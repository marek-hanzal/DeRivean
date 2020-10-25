import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/user-context/module/kingdom/view/create/CreateView";
import DashboardView from "site/root/module/user-context/module/kingdom/view/dashboard/DashboardView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.userContext.kingdom.dashboard.match(), <DashboardView/>),
			route(Routes.root.userContext.kingdom.create.match(), <CreateView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const KingdomRoute = () => route(Routes.root.userContext.kingdom.match(), <Router/>);

export {
	KingdomRoute,
};
