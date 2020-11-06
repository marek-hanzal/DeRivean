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
import BuildingIcon from "site/root/module/building/component/icon/BuildingIcon";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "root.building";
const link = Routes.root.building;

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem key={"root.kingdom"} id={"root.kingdom"} href={Routes.root.kingdom.home} icon={<BackIcon/>}/>
			<MenuDivider/>
			<BuildingMenuItem key={id}/>
			<MenuDivider/>
			<LogoutMenuItem key={"root.sign-out"} id={"root.sign-out"}/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.edit.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem/>
				</BaseMenu>),
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<BuildingIcon/>}/>
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

const BuildingMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<BuildingIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

const BuildingMenuRoute = () => route(link.match(), <Menu/>);

export {
	BuildingMenuItem,
	BuildingMenuRoute,
};
