import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import {BuildingMenuItem} from "site/root/module/building/site/Menu";
import {HeroMenuItem} from "site/root/module/hero/site/Menu";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import menuLogout from "site/root/utils/menu/menuLogout";
import Routes from "site/Routes";
import menuBack from "utils/menu/menuBack";
import menuDivider from "utils/menu/menuDivider";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const DefaultMenu = () => {
	return (
		<BaseMenu
			items={[
				menuDivider(),
				menuBack(),
				menuDivider(),
				KingdomMenuItem(),
				menuDivider(),
				menuLogout(),
			]}
		/>
	);
};

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.kingdom.home.match(), <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),
						menuItem(Routes.root.kingdom.home.link(), "root.kingdom", <KingdomIcon/>),
						menuDivider(),
						HeroMenuItem(true),
						menuDivider(),
						BuildingMenuItem(true),
						menuDivider(),
						menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
					]}
				/>),
				route(Routes.root.kingdom.edit.match(), <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),
						menuItem(Routes.root.kingdom.edit.link(), "root.kingdom.edit", <EditIcon/>),
						menuDivider(),
						menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
					]}
				/>),
				route(Routes.root.kingdom.dashboard.match(), <DefaultMenu/>),
				route(Routes.root.kingdom.create.match(), <DefaultMenu/>),
				route(Routes.root.kingdom.list.match(), <DefaultMenu/>),
			]}
		/>
	);
};

const KingdomMenuItem = (history = false) => menuGroup("root.kingdom", <KingdomIcon/>, [
	menuItem(Routes.root.kingdom.dashboard.link(), "root.kingdom.dashboard", <DashboardIcon/>, history),
	menuItem(Routes.root.kingdom.create.link(), "root.kingdom.create", <CreateIcon/>, history),
	menuItem(Routes.root.kingdom.list.link(), "root.kingdom.list", <ListIcon/>, history),
]);

const KingdomMenuRoute = () => route(Routes.root.kingdom.match(), <Menu/>);

export {
	KingdomMenuItem,
	KingdomMenuRoute,
};
