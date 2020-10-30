import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import Routes from "site/Routes";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";

const KingdomMenuItem = () => menuGroup("root.userContext.kingdom", <KingdomIcon/>, [
	menuItem(Routes.root.kingdom.dashboard.link(), "root.userContext.kingdom.dashboard", <DashboardIcon/>),
	menuItem(Routes.root.kingdom.create.link(), "root.userContext.kingdom.create", <CreateIcon/>),
	menuItem(Routes.root.kingdom.list.link(), "root.userContext.kingdom.list", <ListIcon/>),
]);

export {
	KingdomMenuItem,
};
