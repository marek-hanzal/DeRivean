import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import BaseRoutes from "component/route/BaseRoutes";
import {KingdomBreadcrumbRoute} from "site/root/module/kingdom/site/Breadcrumbs";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import Routes from "site/Routes";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbSimpleItem from "utils/breadcrumbs/breadcrumbSimpleItem";
import route from "utils/route/route";

const Breadcrumbs = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.userContext.dashboard.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbSimpleItem("root.userContext.dashboard", <UserDashboardIcon/>),
				]}
			/>),
			KingdomBreadcrumbRoute(),
		]}
	/>
;

const UserContextBreadcrumbRoute = () => route(Routes.root.userContext.match(), <Breadcrumbs/>);

export {
	UserContextBreadcrumbRoute,
};
