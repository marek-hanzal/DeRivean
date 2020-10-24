import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/site/UserPath";
import RootPath from "site/root/site/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const UserMenu = () =>
	<BaseRoutes
		routes={{
			"*":
				<BaseMenu
					items={[
						menuItem(RootPath.root, "root.home", <HomeIcon/>),
						menuItem(UserPath.link.dashboard(), "root.user.dashboard", <UserDashboardIcon/>),
						menuDivider(),
						menuItem(UserPath.link.create(), "root.user.create", <CreateIcon/>),
						menuItem(UserPath.link.list(), "root.user.list", <ListIcon/>),
						menuDivider(),
						menuItem(RootPath.link.signOut(), "root.sign-out", <SignOutIcon/>),
					]}
				/>,
		}}
	/>
;

export default UserMenu;
