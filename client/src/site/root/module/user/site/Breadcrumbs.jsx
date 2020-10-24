import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import Routes from "site/root/module/user/site/Routes";
import RootPath from "site/root/site/RootPath";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import route from "utils/route/route";

const Breadcrumbs = () =>
	<BaseRoutes
		routes={[
			route(Routes.route.dashboard, <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(RootPath.root, <HomeIcon/>),
					breadcrumbCurrentItem("root.user.dashboard", <UserDashboardIcon/>),
				]}
			/>),
			route(Routes.route.create, <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(RootPath.root, <HomeIcon/>),
					breadcrumbItem(Routes.relative.dashboard, "root.user.dashboard", <UserDashboardIcon/>),
					breadcrumbCurrentItem("root.user.create", <CreateIcon/>),
				]}
			/>),
			route(Routes.route.list, <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(RootPath.root, <HomeIcon/>),
					breadcrumbItem(Routes.relative.dashboard, "root.user.dashboard", <UserDashboardIcon/>),
					breadcrumbCurrentItem("root.user.list", <ListIcon/>),
				]}
			/>),
		]}
	/>
;

const UserBreadcrumbRoute = () => route(Routes.route.root, <Breadcrumbs/>);

export {
	UserBreadcrumbRoute,
};
