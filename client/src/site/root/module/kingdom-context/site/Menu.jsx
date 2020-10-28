import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import HomeIcon from "component/icon/HomeIcon";
import ListIcon from "component/icon/ListIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import KingdomContextIcon from "site/root/module/kingdom-context/component/icon/KingdomContextIcon";
import HeroIcon from "site/root/module/kingdom-context/module/hero/component/icon/HeroIcon";
import Routes from "site/Routes";
import menuDivider from "utils/menu/menuDivider";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route("*", <BaseMenu
					items={[
						menuItem(Routes.root.link(), "root.home", <HomeIcon/>),
						menuItem(Routes.root.kingdomContext.dashboard.link(), "root.kingdomContext.dashboard", <KingdomContextIcon/>),
						menuDivider(),
						menuGroup("root.kingdomContext.hero", <HeroIcon/>, [
							menuItem(Routes.root.kingdomContext.hero.dashboard.link(), "root.kingdomContext.hero.dashboard", <DashboardIcon/>),
							menuItem(Routes.root.kingdomContext.hero.list.link(), "root.kingdomContext.hero.list", <ListIcon/>),
							menuItem(Routes.root.kingdomContext.hero.create.link(), "root.kingdomContext.hero.create", <CreateIcon/>),
						]),
						menuDivider(),
						menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
					]}
				/>),
			]}
		/>
	);
};

const KingdomContextMenuRoute = () => route(Routes.root.kingdomContext.match(), <Menu/>);

export {
	KingdomContextMenuRoute,
};
