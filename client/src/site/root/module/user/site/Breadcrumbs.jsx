import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import Routes from "site/Routes";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import route from "utils/route/route";

const Breadcrumbs = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.user.dashboard.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbCurrentItem("root.user.dashboard", <UserDashboardIcon/>),
				]}
			/>),
			route(Routes.root.user.create.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <UserDashboardIcon/>),
					breadcrumbCurrentItem("root.user.create", <CreateIcon/>),
				]}
			/>),
			route(Routes.root.user.list.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <UserDashboardIcon/>),
					breadcrumbCurrentItem("root.user.list", <ListIcon/>),
				]}
			/>),
		]}
	/>
;

const UserBreadcrumbRoute = () => route(Routes.root.user.match(), <Breadcrumbs/>);

export {
	UserBreadcrumbRoute,
};