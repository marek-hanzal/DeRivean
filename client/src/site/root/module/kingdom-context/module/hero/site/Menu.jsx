import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import HeroIcon from "site/root/module/kingdom-context/module/hero/component/icon/HeroIcon";
import Routes from "site/Routes";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";

const HeroMenuItem = () => menuGroup("root.kingdomContext.hero", <HeroIcon/>, [
	menuItem(Routes.root.kingdomContext.hero.dashboard.link(), "root.kingdomContext.hero.dashboard", <DashboardIcon/>),
	menuItem(Routes.root.kingdomContext.hero.create.link(), "root.kingdomContext.hero.create", <CreateIcon/>),
	menuItem(Routes.root.kingdomContext.hero.list.link(), "root.kingdomContext.hero.list", <ListIcon/>),
]);

export {
	HeroMenuItem,
};