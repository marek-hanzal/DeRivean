import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import BuildingIcon from "site/root/module/kingdom-context/module/building/component/icon/BuildingIcon";
import Routes from "site/Routes";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";

const BuildingMenuItem = () => menuGroup("root.kingdomContext.building", <BuildingIcon/>, [
	menuItem(Routes.root.kingdomContext.building.dashboard.link(), "root.kingdomContext.building.dashboard", <DashboardIcon/>),
	menuItem(Routes.root.kingdomContext.building.create.link(), "root.kingdomContext.building.create", <CreateIcon/>),
	menuItem(Routes.root.kingdomContext.building.list.link(), "root.kingdomContext.building.list", <ListIcon/>),
]);

export {
	BuildingMenuItem,
};
