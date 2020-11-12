import BaseRoutes from "component/route/BaseRoutes";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.game.kingdom;

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				// route(links.dashboard.match(), <DashboardView/>),
				// route(links.create.match(), <CreateView/>),
				// route(links.list.match(), <ListView/>),
				// route(links.home.match(), <HomeView/>),
				// route(links.edit.match(), <EditView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const KingdomRoute = () => route(links.match(), <Router/>);

export {
	KingdomRoute,
};
