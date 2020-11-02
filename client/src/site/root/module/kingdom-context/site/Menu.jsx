import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import {BuildingMenuItem} from "site/root/module/building/site/Menu";
import {HeroMenuItem} from "site/root/module/hero/site/Menu";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
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
						menuItem(Routes.root.kingdom.context.kingdom.link(), "root.kingdomContext.dashboard", <KingdomIcon/>),
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

const KingdomContextMenuRoute = () => route(Routes.root.kingdom.context.match(), <Menu/>);

export {
	KingdomContextMenuRoute,
};
