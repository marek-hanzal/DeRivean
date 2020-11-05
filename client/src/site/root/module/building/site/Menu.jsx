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
import PropTypes from "prop-types";
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
			<MenuItem id={"root.kingdom"} href={Routes.root.kingdom.home.link()} icon={<BackIcon/>}/>
			<MenuDivider/>
			<BuildingMenuItem key={id} id={id}/>
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
					<MenuItem key={id} id={id} href={link.home.link()} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit.link()} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root.sign-out"}/>
				</BaseMenu>),
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home.link()} icon={<BuildingIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit.link()} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root.sign-out"}/>
				</BaseMenu>),
				route(link.dashboard.match(), <DefaultMenu/>),
				route(link.create.match(), <DefaultMenu/>),
				route(link.list.match(), <DefaultMenu/>),
			]}
		/>
	);
};

const BuildingMenuItem = ({id, ...props}) => {
	return (
		<MenuGroup id={id} icon={<BuildingIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard.link()} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create.link()} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list.link()} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

BuildingMenuItem.propTypes = {
	id: PropTypes.string.isRequired,
};

const BuildingMenuRoute = () => route(link.match(), <Menu/>);

export {
	BuildingMenuItem,
	BuildingMenuRoute,
};
