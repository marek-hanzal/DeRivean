import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
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
				HeroMenuItem(),
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
				route(Routes.root.hero.home.match(), <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),
						menuLogout(),
					]}
				/>),
				route(Routes.root.hero.dashboard.match(), <DefaultMenu/>),
				route(Routes.root.hero.create.match(), <DefaultMenu/>),
				route(Routes.root.hero.list.match(), <DefaultMenu/>),
			]}
		/>
	);
};

const HeroMenuItem = (history = false) => menuGroup("root.hero", <HeroIcon/>, [
	menuItem(Routes.root.hero.dashboard.link(), "root.hero.dashboard", <DashboardIcon/>, history),
	menuItem(Routes.root.hero.create.link(), "root.hero.create", <CreateIcon/>, history),
	menuItem(Routes.root.hero.list.link(), "root.hero.list", <ListIcon/>, history),
]);

const HeroMenuRoute = () => route(Routes.root.hero.match(), <Menu/>);

export {
	HeroMenuItem,
	HeroMenuRoute,
};
