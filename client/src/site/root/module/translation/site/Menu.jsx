import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
import menuLogout from "site/root/utils/menu/menuLogout";
import menuRoot from "site/root/utils/menu/menuRoot";
import Routes from "site/Routes";
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
						menuRoot(),
						menuDivider(),

						TranslationMenuItem([
							menuItem(Routes.root.translation.edit.link(), "root.translation.edit", <EditIcon/>),
						]),

						menuDivider(),
						menuLogout(),
					]}
				/>),
				route("*", <BaseMenu
					items={[
						menuDivider(),
						menuRoot(),
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

const TranslationMenuItem = (extra = []) => menuGroup("root.translation", <TranslationIcon/>, [
	menuItem(Routes.root.translation.dashboard.link(), "root.translation.dashboard", <DashboardIcon/>),
	menuItem(Routes.root.translation.create.link(), "root.translation.create", <CreateIcon/>),
	menuItem(Routes.root.translation.list.link(), "root.translation.list", <ListIcon/>),
].concat(extra));

const TranslationMenuRoute = () => route(Routes.root.translation.match(), <Menu/>);

export {
	TranslationMenuItem,
	TranslationMenuRoute,
};
