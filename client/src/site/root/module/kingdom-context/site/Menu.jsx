import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import {HeroMenuItem} from "site/root/module/hero/site/Menu";
import KingdomContextIcon from "site/root/module/kingdom-context/component/icon/KingdomContextIcon";
import {BuildingMenuItem} from "site/root/module/kingdom-context/module/building/site/Menu";
import Routes from "site/Routes";
import menuBack from "utils/menu/menuBack";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route("*", <BaseMenu
					items={[
						menuDivider(),
						menuBack(),
						menuDivider(),
						menuItem(Routes.root.kingdomContext.dashboard.link(), "root.kingdomContext.dashboard", <KingdomContextIcon/>),
						menuDivider(),
						HeroMenuItem(),
						menuDivider(),
						BuildingMenuItem(),
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
