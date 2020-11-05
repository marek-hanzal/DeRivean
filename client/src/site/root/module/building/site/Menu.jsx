import BackIcon from "component/icon/BackIcon";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import menuLogout from "site/root/utils/menu/menuLogout";
import Routes from "site/Routes";
import menuDivider from "utils/menu/menuDivider";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const DefaultMenu = () => {
	return (
		<BaseMenu
			items={[
				menuDivider(),
				menuItem(Routes.root.kingdom.home.link(), "root.kingdom", <BackIcon/>),
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
				route(Routes.root.building.edit.match(), <BaseMenu
					items={[
						menuDivider(),
						menuItem(Routes.root.building.home.link(), "root.building", <BackIcon/>),
						menuDivider(),
						menuItem(Routes.root.building.edit.link(), "root.building.edit", <EditIcon/>),
						menuDivider(),
						menuLogout(),
					]}
				/>),
				route(Routes.root.building.home.match(), <BaseMenu
					items={[
						menuDivider(),
						menuItem(Routes.root.building.home.link(), "root.building", <BuildingIcon/>),
						menuDivider(),
						menuItem(Routes.root.building.edit.link(), "root.building.edit", <EditIcon/>),
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

const BuildingMenuItem = () => menuGroup("root.building", <BuildingIcon/>, [
	menuItem(Routes.root.building.dashboard.link(), "root.building.dashboard", <DashboardIcon/>),
	menuItem(Routes.root.building.create.link(), "root.building.create", <CreateIcon/>),
	menuItem(Routes.root.building.list.link(), "root.building.list", <ListIcon/>),
]);

const BuildingMenuRoute = () => route(Routes.root.building.match(), <Menu/>);

export {
	BuildingMenuItem,
	BuildingMenuRoute,
};
