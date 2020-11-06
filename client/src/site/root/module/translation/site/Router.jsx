import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/translation/view/create/CreateView";
import DashboardView from "site/root/module/translation/view/dashboard/DashboardView";
import EditView from "site/root/module/translation/view/edit/EditView";
import ListView from "site/root/module/translation/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.root.translation;

const Router = () =>
	<BaseRoutes
		routes={[
			route(links.dashboard.match(), <DashboardView/>),
			route(links.create.match(), <CreateView/>),
			route(links.edit.match(), <EditView/>),
			route(links.list.match(), <ListView/>),
			route(links.home.match(), <EditView/>),
			route("*", <NotFoundView/>),
		]}
	/>
;

const TranslationRoute = () => route(links.match(), <Router/>);

export {
	TranslationRoute,
};
