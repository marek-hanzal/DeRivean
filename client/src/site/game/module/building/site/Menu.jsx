import BackIcon from "component/icon/BackIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuGroup from "component/menu/MenuGroup";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import BuildingIcon from "site/common/icon/BuildingIcon";
import HomeMenuItem from "site/common/menu/HomeMenuItem";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "game.building";
const link = Routes.game.building;

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<HomeMenuItem id={"game"} href={Routes.game}/>
			<MenuDivider/>
			<BuildingMenuItem key={id} id={id}/>
			<MenuDivider/>
			<LogoutMenuItem key={"game.sign-out"} id={"game"} href={Routes.game.signOut}/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={"game.building.list"} id={"game.building.home.back"} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<BuildingIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"game.sign-out"} id={"game"} href={Routes.game.signOut}/>
				</BaseMenu>),
				route(link.dashboard.match(), <DefaultMenu/>),
				route(link.list.match(), <DefaultMenu/>),
			]}
		/>
	);
};

const BuildingMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<BuildingIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

const BuildingMenuRoute = () => route(link.match(), <Menu/>);

export {
	BuildingMenuItem,
	BuildingMenuRoute,
};
