import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import {Route, Routes} from "react-router-dom";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/site/UserPath";
import RootPath from "site/root/site/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const HomeMenu = () =>
	<BaseMenu
		items={[
			menuItem(RootPath.root, "root.home", <HomeIcon/>),
			menuDivider(),
			menuItem(UserPath.link.dashboard(RootPath.root), "root.user.dashboard", <UserDashboardIcon/>),
			menuDivider(),
			menuItem(RootPath.signOut, "root.sign-out", <SignOutIcon/>),
		]}
	/>
;

const Menu = () =>
	<Routes>
		<Route path={RootPath.root + "/*"} element={<HomeMenu/>}/>
	</Routes>
;

export default Menu;
