import ContextIcon from "component/icon/ContextIcon";
import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import Routes from "site/root/module/user-context/site/Routes";
import UserDashboardIcon from "site/root/module/user/component/icon/UserDashboardIcon";
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
					menuItem("../../user/dashboard", "root.user.dashboard [resolve relative link]", <UserDashboardIcon/>),
					menuItem(Routes.route.dashboard, "root.user.context.dashboard", <ContextIcon/>),
					menuDivider(),
					menuItem(Routes.route.kingdom, "root.user.context.kingdom", <KingdomIcon/>),
					menuDivider(),
					menuItem(RootPath.link.signOut(), "root.sign-out", <SignOutIcon/>),
				]}
			/>),
		]}
	/>
;

const UserContextMenuRoute = () => route(Routes.route.root, <Menu/>);

export {
	UserContextMenuRoute,
};
