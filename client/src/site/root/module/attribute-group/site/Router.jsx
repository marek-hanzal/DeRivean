import BaseRoutes from "component/route/BaseRoutes";
import DashboardView from "site/root/module/attribute-group/view/dashboard/DashboardView";
import Routes from "site/Routes";
import route from "utils/route/route";
import NotFoundView from "view/NotFoundView";

const links = Routes.root.attributeGroup;

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

const AttributeGroupRoute = () => route(links.match(), <Router/>);

export {
	AttributeGroupRoute,
};
