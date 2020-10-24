import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import {Route, Routes} from "react-router";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/site/UserPath";
import RootPath from "site/root/site/RootPath";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";

const DashboardBreadcrumbs = () =>
	<BaseBreadcrumbs
		items={[
			breadcrumbIconItem(RootPath.root, <HomeIcon/>),
			breadcrumbCurrentItem("root.user.dashboard", <UserDashboardIcon/>),
		]}
	/>
;

const UserBreadcrumbs = () =>
	<Routes>
		<Route path={UserPath.dashboard} element={<DashboardBreadcrumbs/>}/>
		<Route path={UserPath.create} element={<DashboardBreadcrumbs/>}/>
	</Routes>
;

export default UserBreadcrumbs;
