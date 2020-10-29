import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import BaseRoutes from "component/route/BaseRoutes";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import Routes from "site/Routes";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import route from "utils/route/route";

const Breadcrumbs = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.userContext.dashboard.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbCurrentItem("root.userContext.dashboard", <UserDashboardIcon/>),
				]}
			/>),
			// route(Routes.root.userContext.create.match(), <BaseBreadcrumbs
			// 	items={[
			// 		breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
			// 		breadcrumbItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <UserDashboardIcon/>),
			// 		breadcrumbCurrentItem("root.user.create", <CreateIcon/>),
			// 	]}
			// />),
			// route(Routes.root.userContext.list.match(), <BaseBreadcrumbs
			// 	items={[
			// 		breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
			// 		breadcrumbItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <UserDashboardIcon/>),
			// 		breadcrumbCurrentItem("root.user.list", <ListIcon/>),
			// 	]}
			// />),
		]}
	/>
;

const UserContextBreadcrumbRoute = () => route(Routes.root.userContext.match(), <Breadcrumbs/>);

export {
	UserContextBreadcrumbRoute,
};
