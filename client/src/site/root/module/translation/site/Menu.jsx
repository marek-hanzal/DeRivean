import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
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
				route(Routes.root.translation.home.match(), <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),

						menuItem(Routes.root.translation.home.link(), "root.translation.home", <TranslationIcon/>),
						menuItem(Routes.root.translation.edit.link(), "root.translation.edit", <EditIcon/>, true),

						menuDivider(),
						menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
					]}
				/>),
				route(Routes.root.translation.edit.match(), <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),

						menuItem(Routes.root.translation.home.link(), "root.translation.home", <TranslationIcon/>),
						menuItem(Routes.root.translation.edit.link(), "root.translation.edit", <EditIcon/>, true),

						menuDivider(),
						menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
					]}
				/>),
				route("*", <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),

						TranslationMenuItem(),

						menuDivider(),
						menuLogout(),
					]}
				/>),
			]}
		/>
	);
};

const TranslationMenuItem = (history = false) => menuGroup("root.translation", <TranslationIcon/>, [
	menuItem(Routes.root.translation.dashboard.link(), "root.translation.dashboard", <DashboardIcon/>, history),
	menuItem(Routes.root.translation.create.link(), "root.translation.create", <CreateIcon/>, history),
	menuItem(Routes.root.translation.list.link(), "root.translation.list", <ListIcon/>, history),
]);

const TranslationMenuRoute = () => route(Routes.root.translation.match(), <Menu/>);

export {
	TranslationMenuItem,
	TranslationMenuRoute,
};
