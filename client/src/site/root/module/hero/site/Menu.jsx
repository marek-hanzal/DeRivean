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
			<MenuItem key={id} id={id} href={link.home} icon={<BackIcon/>}/>
			<MenuDivider/>
			<HeroMenuItem key={id}/>
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
					<MenuItem key={id} id={id} href={link.home} icon={<HeroIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem/>
				</BaseMenu>),
				route(link.edit.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
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

const HeroMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<HeroIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

const HeroMenuRoute = () => route(link.match(), <Menu/>);

export {
	HeroMenuItem,
	HeroMenuRoute,
};
