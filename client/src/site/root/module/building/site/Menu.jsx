import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import Routes from "site/Routes";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";

const BuildingMenuItem = () => menuGroup("root.building", <BuildingIcon/>, [
	menuItem(Routes.root.building.dashboard.link(), "root.building.dashboard", <DashboardIcon/>),
	menuItem(Routes.root.building.create.link(), "root.building.create", <CreateIcon/>),
	menuItem(Routes.root.building.list.link(), "root.building.list", <ListIcon/>),
]);

export {
	BuildingMenuItem,
};
