import AttributeIcon from "component/icon/AttributeIcon";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import {KingdomMenuItem} from "site/root/module/kingdom/site/Menu";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import menuLogout from "site/root/utils/menu/menuLogout";
import Routes from "site/Routes";
import menuBack from "utils/menu/menuBack";
import menuDivider from "utils/menu/menuDivider";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(Routes.root.user.home.match(), <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),
						menuItem(Routes.root.user.home.link(), "root.user", <UserIcon/>),
						menuItem(Routes.root.user.edit.link(), "root.user.edit", <EditIcon/>, true),
						menuDivider(),
						KingdomMenuItem(true),
						menuDivider(),
						menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
					]}
				/>),
				route(Routes.root.user.edit.match(), <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),
						menuItem(Routes.root.user.home.link(), "root.user", <UserIcon/>),
						menuItem(Routes.root.user.edit.link(), "root.user.edit", <EditIcon/>),
						menuDivider(),
						menuItem(Routes.root.user.attributes.link(), "root.user.attributes", <AttributeIcon/>),
						menuDivider(),
						menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
					]}
				/>),
				route("*", <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),
						UserMenuItem(),
						menuDivider(),
						menuLogout(),
					]}
				/>),
			]}
		/>
	);
};

const UserMenuItem = (history = false) => menuGroup("root.user", <UserIcon/>, [
	menuItem(Routes.root.user.dashboard.link(), "root.user.dashboard", <DashboardIcon/>, history),
	menuItem(Routes.root.user.create.link(), "root.user.create", <CreateIcon/>, history),
	menuItem(Routes.root.user.list.link(), "root.user.list", <ListIcon/>, history),
]);

const UserMenuRoute = () => route(Routes.root.user.match(), <Menu/>);

export {
	UserMenuRoute,
	UserMenuItem,
};
