import {BaseMenu, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import BackIcon from "component/icon/BackIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import {Route, Routes} from "react-router-dom";
import BuildingIcon from "site/common/icon/BuildingIcon";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";

const id = "game.building";

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem key={"game.kingdom"} id={"game.kingdom"} href={Routes.game.kingdom.home} icon={<BackIcon/>}/>
			<MenuDivider/>
			<BuildingMenuItem key={id} id={id}/>
			<MenuDivider/>
			<LogoutMenuItem key={"game.sign-out"} id={"game"} href={Routes.game.signOut}/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<Routes>
			<Route path={link.home.match()} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={"game.building.list"} id={"game.building.home.back"} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<BuildingIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"game.sign-out"} id={"game"} href={Routes.game.signOut}/>
				</BaseMenu>
			}/>
			<Route path={link.dashboard.match()} element={<DefaultMenu/>}/>
			<Route path={link.list.match()} element={<DefaultMenu/>}/>
		</Routes>
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

// const BuildingMenuRoute = () => route(link.match(), <Menu/>);

export {
	BuildingMenuItem,
	// BuildingMenuRoute,
};
