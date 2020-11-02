import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
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
				BuildingMenuItem(),
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
				route(Routes.root.building.building.match(), <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),
						menuLogout(),
					]}
				/>),
				route(Routes.root.building.dashboard.match(), <DefaultMenu/>),
				route(Routes.root.building.create.match(), <DefaultMenu/>),
				route(Routes.root.building.list.match(), <DefaultMenu/>),
			]}
		/>
	);
};

const BuildingMenuItem = (history = false) => menuGroup("root.building", <BuildingIcon/>, [
	menuItem(Routes.root.building.dashboard.link(), "root.building.dashboard", <DashboardIcon/>, history),
	menuItem(Routes.root.building.create.link(), "root.building.create", <CreateIcon/>, history),
	menuItem(Routes.root.building.list.link(), "root.building.list", <ListIcon/>, history),
]);

const BuildingMenuRoute = () => route(Routes.root.building.match(), <Menu/>);

export {
	BuildingMenuItem,
	BuildingMenuRoute,
};
