import {BackIcon, BaseMenu, DashboardIcon, link, ListIcon, match, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import {Route, Routes} from "react-router-dom";
import BuildingIcon from "../../../../common/icon/BuildingIcon";
import LogoutMenuItem from "../../../../common/menu/LogoutMenuItem";

const id = "game.building";

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem key={"game.kingdom"} id={"game.kingdom"} href={link("game.kingdom.home")} icon={<BackIcon/>}/>
			<MenuDivider/>
			<BuildingMenuItem key={id} id={id}/>
			<MenuDivider/>
			<LogoutMenuItem key={"game.sign-out"} id={"game"} href={link("game.sign-out")}/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<Routes>
			<Route path={match("game.building.home")} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={id + ".list"} id={id + ".home.back"} href={link(id + ".list")} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link(id + ".home")} icon={<BuildingIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"game.sign-out"} id={"game"} href={link("game.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={match(id + ".dashboard")} element={<DefaultMenu/>}/>
			<Route path={match(id + ".list")} element={<DefaultMenu/>}/>
		</Routes>
	);
};

const BuildingMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<BuildingIcon/>} {...props}>
			<MenuItem key={id + ".dashboard"} id={id + ".dashboard"} href={link(id + ".dashboard")} icon={<DashboardIcon/>}/>
			<MenuItem key={id + ".list"} id={id + ".list"} href={link(id + ".list")} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

// const BuildingMenuRoute = () => route(link.match(), <Menu/>);

export {
	BuildingMenuItem,
	// BuildingMenuRoute,
};
