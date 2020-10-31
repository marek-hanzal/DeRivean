import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
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
						// menuDivider(),
						// menuItem(Routes.root.buildingContext.dashboard.link(), "root.buildingContext.dashboard", <BuildingIcon/>),
						// menuDivider(),
						// HeroMenuItem(),
						// menuDivider(),
						menuDivider(),
						menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
					]}
				/>),
			]}
		/>
	);
};

const BuildingContextMenuRoute = () => route(Routes.root.buildingContext.match(), <Menu/>);

export {
	BuildingContextMenuRoute,
};