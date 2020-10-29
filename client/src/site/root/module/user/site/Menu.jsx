import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import UserContextIcon from "site/root/module/user-context/component/icon/UserContextIcon";
import Routes from "site/Routes";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";

const UserMenuItem = () => menuGroup("root.user", <UserContextIcon/>, [
	menuItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <DashboardIcon/>),
	menuItem(Routes.root.user.create.link(), "root.user.create", <CreateIcon/>),
	menuItem(Routes.root.user.list.link(), "root.user.list", <ListIcon/>),
]);

export {
	UserMenuItem,
};
