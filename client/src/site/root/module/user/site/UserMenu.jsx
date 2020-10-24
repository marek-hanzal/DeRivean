import ContextIcon from "component/icon/ContextIcon";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import UserPath from "site/root/module/user/site/UserPath";
import RootPath from "site/root/site/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const UserMenu = () =>
	<BaseRoutes
		routes={[
			route(UserPath.route.context, <BaseMenu
				items={[
					menuItem(RootPath.root, "root.home", <HomeIcon/>),
					menuItem("../" + UserPath.relative.dashboard(), "root.user.dashboard", <UserDashboardIcon/>),
					menuItem(UserPath.relative.context(), "root.user.context", <ContextIcon/>),
					menuDivider(),
					menuItem(UserPath.relative.kingdom(), "root.user.kingdom", <KingdomIcon/>),
					menuDivider(),
					menuItem(RootPath.link.signOut(), "root.sign-out", <SignOutIcon/>),
				]}
			/>),
			route("*", <BaseMenu
				items={[
					menuItem(RootPath.root, "root.home", <HomeIcon/>),
					menuItem(UserPath.route.dashboard, "root.user.dashboard", <UserDashboardIcon/>),
					menuDivider(),
					menuItem(UserPath.route.create, "root.user.create", <CreateIcon/>),
					menuItem(UserPath.route.list, "root.user.list", <ListIcon/>),
					menuDivider(),
					menuItem(RootPath.link.signOut(), "root.sign-out", <SignOutIcon/>),
				]}
			/>),
		]}
	/>
;

const UserMenuRoute = () => route(UserPath.route.root, <UserMenu/>);

const UserMenuItem = () => menuItem(UserPath.link.dashboard(), "root.user.dashboard", <UserDashboardIcon/>);

export {
	UserMenuRoute,
	UserMenuItem,
};
