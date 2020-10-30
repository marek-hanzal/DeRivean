import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import {KingdomMenuItem} from "site/root/module/kingdom/site/Menu";
import UserContextIcon from "site/root/module/user-context/component/icon/UserContextIcon";
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
						menuItem(Routes.root.userContext.dashboard.link(), "root.userContext.dashboard", <UserContextIcon/>),
						menuDivider(),
						KingdomMenuItem(),
						menuDivider(),
						menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
					]}
				/>),
			]}
		/>
	);
};

const UserContextMenuRoute = () => route(Routes.root.userContext.match(), <Menu/>);

export {
	UserContextMenuRoute,
};
