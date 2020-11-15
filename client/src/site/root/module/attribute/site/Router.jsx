import BaseRoutes from "component/route/BaseRoutes";
import DashboardView from "site/root/module/attribute/view/dashboard/DashboardView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.root.attribute;

const Router = () => {
	return (
		<BaseRoutes
			routes={[
				route(links.dashboard.match(), <DashboardView/>),
				route("*", <NotFoundView/>),
			]}
		/>
	);
};

const AttributeRoute = () => route(links.match(), <Router/>);

export {
	AttributeRoute,
};
