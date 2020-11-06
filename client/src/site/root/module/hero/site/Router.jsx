import BaseRoutes from "component/route/BaseRoutes";
import CreateView from "site/root/module/hero/view/create/CreateView";
import DashboardView from "site/root/module/hero/view/dashboard/DashboardView";
import AttributesView from "site/root/module/hero/view/edit/AttributesView";
import EditView from "site/root/module/hero/view/edit/EditView";
import HomeView from "site/root/module/hero/view/home/HomeView";
import ListView from "site/root/module/hero/view/list/ListView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.root.hero;

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(links.dashboard.match(), <DashboardView/>),
				route(links.list.match(), <ListView/>),
				route(links.create.match(), <CreateView/>),
				route(links.home.match(), <HomeView/>),
				route(links.edit.match(), <EditView/>),
				route(links.attributes.match(), <AttributesView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const HeroRoute = () => route(links.match(), <Router/>);

export {
	HeroRoute,
};
