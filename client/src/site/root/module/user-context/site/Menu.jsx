import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import UserContextIcon from "site/root/module/user-context/component/icon/UserContextIcon";
import Routes from "site/Routes";
import menuDivider from "utils/menu/menuDivider";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const Menu = () =>
	<BaseRoutes
		routes={[
			route("*", <BaseMenu
				items={[
					menuItem(Routes.root.link(), "root.home", <HomeIcon/>),
					menuItem(Routes.root.user.list.link(), "root.user.list", <ListIcon/>),
					menuItem(Routes.root.userContext.dashboard.link(), "root.userContext.dashboard", <UserContextIcon/>),
					menuDivider(),
					menuGroup("root.userContext.kingdom", <KingdomIcon/>, [
						menuItem(Routes.root.userContext.kingdom.dashboard.link(), "root.userContext.kingdom.dashboard", <DashboardIcon/>),
						menuItem(Routes.root.userContext.kingdom.create.link(), "root.userContext.kingdom.create", <CreateIcon/>),
						menuItem(Routes.root.userContext.kingdom.list.link(), "root.userContext.kingdom.list", <ListIcon/>),
					]),
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
