import ContextIcon from "component/icon/ContextIcon";
import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
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
					menuItem("../../user/dashboard", "root.user.dashboard [resolve relative link]", <UserDashboardIcon/>),
					menuItem(Routes.root.userContext.dashboard.link(), "root.user.context.dashboard", <ContextIcon/>),
					menuDivider(),
					menuItem(Routes.root.userContext.kingdom.link(), "root.user.context.kingdom", <KingdomIcon/>),
					menuDivider(),
					menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
				]}
			/>),
		]}
	/>
;

const UserContextMenuRoute = () => route(Routes.root.userContext.match(), <Menu/>);

export {
	UserContextMenuRoute,
};
