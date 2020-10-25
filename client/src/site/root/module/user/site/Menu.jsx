import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
import Routes from "site/Routes";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const Menu = () =>
	<BaseRoutes
		routes={[
			route("*", <BaseMenu
				items={[
					menuItem(Routes.root.link(), "root.home", <HomeIcon/>),
					menuItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <UserDashboardIcon/>),
					menuDivider(),
					menuItem(Routes.root.user.list.link(), "root.user.list", <ListIcon/>),
					menuItem(Routes.root.user.create.link(), "root.user.create", <CreateIcon/>),
					menuDivider(),
					menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
				]}
			/>),
		]}
	/>
;

const UserMenuRoute = () => route(Routes.root.user.match(), <Menu/>);

const UserMenuItem = () => menuItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <UserDashboardIcon/>);

export {
	UserMenuRoute,
	UserMenuItem,
};
