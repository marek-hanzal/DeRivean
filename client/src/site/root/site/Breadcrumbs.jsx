import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import HomeIcon from "component/icon/HomeIcon";
import {Route, Routes} from "react-router";
import PublicPath from "site/public/site/PublicPath";
import UserBreadcrumbs from "site/root/module/user/site/UserBreadcrumbs";
import UserPath from "site/root/module/user/site/UserPath";
import RootPath from "site/root/site/RootPath";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";

const HomeBreadcrumbs = () =>
	<BaseBreadcrumbs
		items={[
			breadcrumbIconItem(PublicPath.root, <HomeIcon/>),
		]}
	/>
;

const Breadcrumbs = () =>
	<Routes>
		<Route path={RootPath.root}>
			<Route path={UserPath.root + "/*"} element={<UserBreadcrumbs/>}/>
			<Route path={"/"} element={<HomeBreadcrumbs/>}/>
		</Route>
	</Routes>
;

export default Breadcrumbs;
