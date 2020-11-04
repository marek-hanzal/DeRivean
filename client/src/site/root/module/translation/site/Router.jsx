import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/translation/view/create/CreateView";
import DashboardView from "site/root/module/translation/view/dashboard/DashboardView";
import EditView from "site/root/module/translation/view/edit/EditView";
import HomeView from "site/root/module/translation/view/home/HomeView";
import ListView from "site/root/module/translation/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.translation.dashboard.match(), <DashboardView/>),
			route(Routes.root.translation.create.match(), <CreateView/>),
			route(Routes.root.translation.edit.match(), <EditView/>),
			route(Routes.root.translation.list.match(), <ListView/>),
			route(Routes.root.translation.home.match(), <HomeView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const TranslationRoute = () => route(Routes.root.translation.match(), <Router/>);

export {
	TranslationRoute,
};
