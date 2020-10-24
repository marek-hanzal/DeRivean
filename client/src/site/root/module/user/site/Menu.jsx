import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import Routes from "site/root/module/user/site/Routes";
import RootPath from "site/root/site/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const Menu = () =>
	<BaseRoutes
		routes={[
			route("*", <BaseMenu
				items={[
					menuItem(RootPath.root, "root.home", <HomeIcon/>),
					menuItem(Routes.route.dashboard, "root.user.dashboard", <UserDashboardIcon/>),
					menuDivider(),
					menuItem(Routes.route.create, "root.user.create", <CreateIcon/>),
					menuItem(Routes.route.list, "root.user.list", <ListIcon/>),
					menuDivider(),
					menuItem(RootPath.link.signOut(), "root.sign-out", <SignOutIcon/>),
				]}
			/>),
		]}
	/>
;

const UserMenuRoute = () => route(Routes.route.root, <Menu/>);

const UserMenuItem = () => menuItem(Routes.absolute.dashboard, "root.user.dashboard", <UserDashboardIcon/>);

export {
	UserMenuRoute,
	UserMenuItem,
};
