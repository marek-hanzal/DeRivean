import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import {Route, Routes} from "react-router-dom";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import BlogMenu from "site/root/module/blog/site/BlogMenu";
import BlogPath from "site/root/module/blog/site/BlogPath";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserMenu from "site/root/module/user/site/UserMenu";
import UserPath from "site/root/module/user/site/UserPath";
import RootPath from "site/root/site/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const HomeMenu = () =>
	<BaseMenu
		items={[
			menuItem(RootPath.root, "root.home", <HomeIcon/>),
			menuDivider(),
			menuItem(UserPath.link.dashboard(), "root.user.dashboard", <UserDashboardIcon/>),
			menuItem(BlogPath.link.dashboard(), "root.blog.dashboard", <BlogIcon/>),
			menuDivider(),
			menuItem(RootPath.signOut, "root.sign-out", <SignOutIcon/>),
		]}
	/>
;

const Menu = () =>
	<Routes>
		<Route path={RootPath.root}>
			<Route path={UserPath.root + "/*"} element={<UserMenu/>}/>
			<Route path={BlogPath.root + "/*"} element={<BlogMenu/>}/>
			<Route path={"/"} element={<HomeMenu/>}/>
		</Route>
	</Routes>
;

export default Menu;
