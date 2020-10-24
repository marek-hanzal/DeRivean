import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import {Route, Routes} from "react-router-dom";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/site/UserPath";
import RootPath from "site/root/site/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const DashboardMenu = () =>
	<BaseMenu
		items={[
			menuItem(RootPath.root, "root.home", <HomeIcon/>),
			menuItem(UserPath.link.dashboard(), "root.user.dashboard", <UserDashboardIcon/>),
			menuDivider(),
			menuItem(UserPath.link.create(), "root.user.create", <CreateIcon/>),
			menuDivider(),
			menuItem(RootPath.link.signOut(), "root.sign-out", <SignOutIcon/>),
		]}
	/>
;

const CreateMenu = DashboardMenu;

const UserMenu = () =>
	<Routes>
		<Route path={UserPath.dashboard} element={<DashboardMenu/>}/>
		<Route path={UserPath.create} element={<CreateMenu/>}/>
	</Routes>
;

export default UserMenu;
