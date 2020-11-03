import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/user/view/create/CreateView";
import DashboardView from "site/root/module/user/view/dashboard/DashboardView";
import HomeView from "site/root/module/user/view/home/HomeView";
import ListView from "site/root/module/user/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.user.dashboard.match(), <DashboardView/>),
			route(Routes.root.user.create.match(), <CreateView/>),
			route(Routes.root.user.list.match(), <ListView/>),
			route(Routes.root.user.home.match(), <HomeView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const UserRoute = () => route(Routes.root.user.match(), <Router/>);

export {
	UserRoute,
};
