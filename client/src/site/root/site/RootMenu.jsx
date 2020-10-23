import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import EntityDashboardIcon from "site/root/module/entity/component/icon/EntityDashboardIcon";
import EntityPath from "site/root/module/entity/EntityPath";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/router/UserPath";
import RootPath from "site/root/router/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const RootMenu = () => ([
	menuItem(RootPath.root, "root.home", <HomeIcon/>),
	menuItem(UserPath.dashboard, "root.user.dashboard", <UserDashboardIcon/>),
	menuItem(EntityPath.dashboard, "root.entity.dashboard", <EntityDashboardIcon/>),
	menuDivider(),
	menuItem(RootPath.signOut, "root.sign-out", <SignOutIcon/>),
]);

export default RootMenu;