import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/kingdom/view/create/CreateView";
import DashboardView from "site/root/module/kingdom/view/dashboard/DashboardView";
import ListView from "site/root/module/kingdom/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.userContext.kingdom.dashboard.match(), <DashboardView/>),
			route(Routes.root.userContext.kingdom.create.match(), <CreateView/>),
			route(Routes.root.userContext.kingdom.list.match(), <ListView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const KingdomRoute = () => route(Routes.root.userContext.kingdom.match(), <Router/>);

export {
	KingdomRoute,
};
