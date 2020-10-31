import BaseRoutes from "component/route/BaseRoutes";
import DashboardView from "site/root/module/hero-context/view/dashboard/DashboardView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.heroContext.dashboard.match(), <DashboardView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const HeroContextRoute = () => route(Routes.root.heroContext.match(), <Router/>);

export {
	HeroContextRoute,
};
