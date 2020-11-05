import BackIcon from "component/icon/BackIcon";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuGroup from "component/menu/MenuGroup";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import LogoutMenuItem from "site/root/component/menu/LogoutMenuItem";
import HeroIcon from "site/root/module/hero/component/icon/HeroIcon";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "root.hero";
const link = Routes.root.hero;

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem id={id} href={link.home.link()} icon={<BackIcon/>}/>
			<MenuDivider/>
			<HeroMenuItem/>
			<MenuDivider/>
			<LogoutMenuItem/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem id={id} href={link.home.link()} icon={<HeroIcon/>}/>
					<MenuDivider/>
					<MenuItem id={`${id}.edit`} href={link.edit.link()} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem/>
				</BaseMenu>),
				route(link.edit.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem id={id} href={link.home.link()} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem id={`${id}.edit`} href={link.edit.link()} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem/>
				</BaseMenu>),
				route(link.dashboard.match(), <DefaultMenu/>),
				route(link.create.match(), <DefaultMenu/>),
				route(link.list.match(), <DefaultMenu/>),
			]}
		/>
	);
};

const HeroMenuItem = () => {
	return (
		<MenuGroup id={id} icon={<HeroIcon/>}>
			<MenuItem id={`${id}.dashboard`} href={link.dashboard.link()} icon={<DashboardIcon/>}/>
			<MenuItem id={`${id}.create`} href={link.create.link()} icon={<CreateIcon/>}/>
			<MenuItem id={`${id}.list`} href={link.list.link()} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

const HeroMenuRoute = () => route(link.match(), <Menu/>);

export {
	HeroMenuItem,
	HeroMenuRoute,
};
