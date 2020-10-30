import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import Routes from "site/Routes";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";

const HeroMenuItem = () => menuGroup("root.hero", <HeroIcon/>, [
	menuItem(Routes.root.hero.dashboard.link(), "root.hero.dashboard", <DashboardIcon/>),
	menuItem(Routes.root.hero.create.link(), "root.hero.create", <CreateIcon/>),
	menuItem(Routes.root.hero.list.link(), "root.hero.list", <ListIcon/>),
]);

export {
	HeroMenuItem,
};
