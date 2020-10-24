import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import BaseRoutes from "component/route/BaseRoutes";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/site/UserPath";
import RootPath from "site/root/site/RootPath";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";

const UserBreadcrumbs = () =>
	<BaseRoutes
		routes={{
			[UserPath.dashboard]:
				<BaseBreadcrumbs
					items={[
						breadcrumbIconItem(RootPath.root, <HomeIcon/>),
						breadcrumbCurrentItem("root.user.dashboard", <UserDashboardIcon/>),
					]}
				/>,
			[UserPath.create]:
				<BaseBreadcrumbs
					items={[
						breadcrumbIconItem(RootPath.root, <HomeIcon/>),
						breadcrumbItem("../" + UserPath.dashboard, "root.user.dashboard", <UserDashboardIcon/>),
						breadcrumbCurrentItem("root.user.create", <CreateIcon/>),
					]}
				/>,
			[UserPath.list]:
				<BaseBreadcrumbs
					items={[
						breadcrumbIconItem(RootPath.root, <HomeIcon/>),
						breadcrumbItem("../" + UserPath.dashboard, "root.user.dashboard", <UserDashboardIcon/>),
						breadcrumbCurrentItem("root.user.list", <ListIcon/>),
					]}
				/>,
		}}
	/>
;

export default UserBreadcrumbs;
