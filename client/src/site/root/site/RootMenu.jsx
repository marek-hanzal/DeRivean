import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import {Route, Routes} from "react-router-dom";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/router/UserPath";
import RootPath from "site/root/router/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const HomeMenu = () =>
	<BaseMenu
		items={[
			menuItem(RootPath.root, "root.home", <HomeIcon/>),
			menuDivider(),
			menuItem(UserPath.dashboard, "root.user.dashboard", <UserDashboardIcon/>),
			menuDivider(),
			menuItem(RootPath.signOut, "root.sign-out", <SignOutIcon/>),
		]}
	/>
;

const RootMenu = () =>
	<Routes>
		<Route path={RootPath.root + "/*"} element={<HomeMenu/>}/>
	</Routes>
;

export default RootMenu;
