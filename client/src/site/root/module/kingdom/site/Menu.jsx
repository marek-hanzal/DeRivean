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
import {BuildingMenuItem} from "site/root/module/building/site/Menu";
import {HeroMenuItem} from "site/root/module/hero/site/Menu";
import KingdomIcon from "site/root/module/kingdom/component/icon/KingdomIcon";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "root.kingdom";
const link = Routes.root.kingdom;

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem id={"root.user"} href={Routes.root.user.home} icon={<BackIcon/>}/>
			<MenuDivider/>
			<KingdomMenuItem key={id} id={id}/>
			<MenuDivider/>
			<LogoutMenuItem key={"root.sign-out"} id={"root.sign-out"}/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={"root.user"} id={"root.user.back"} href={Routes.root.user.home} icon={<BackIcon/>}/>
					<MenuItem key={"root.kingdom.list"} id={"root.kingdom.list.back"} href={Routes.root.kingdom.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<KingdomIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<HeroMenuItem key={"root.hero"}/>
					<MenuDivider/>
					<BuildingMenuItem key={"root.building"}/>
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

const KingdomMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<KingdomIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

const KingdomMenuRoute = () => route(link.match(), <Menu/>);

export {
	KingdomMenuItem,
	KingdomMenuRoute,
};
