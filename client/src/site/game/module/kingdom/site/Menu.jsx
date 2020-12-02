import {BackIcon, BaseMenu, CreateIcon, DashboardIcon, EditIcon, link, ListIcon, match, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import {Route, Routes} from "react-router-dom";
import KingdomIcon from "../../../../common/icon/KingdomIcon";
import HomeMenuItem from "../../../../common/menu/HomeMenuItem";
import LogoutMenuItem from "../../../../common/menu/LogoutMenuItem";
import {BuildingMenuItem} from "../../building/site/Menu";

const id = "game.kingdom";

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<HomeMenuItem id={"game"} href={link("game")}/>
			<MenuDivider/>
			<KingdomMenuItem key={id} id={id}/>
			<MenuDivider/>
			<LogoutMenuItem key={"game.sign-out"} id={"game"} href={link("game.sign-out")}/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<Routes>
			<Route path={match(id)} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={"game.kingdom.list"} id={"game.kingdom.home.back"} href={link(id + ".list")} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link(id)} icon={<KingdomIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link(id + ".edit")} icon={<EditIcon/>}/>
					<MenuDivider/>
					<BuildingMenuItem key={"game.building"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"game.sign-out"} id={"game"} href={link("game.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={match(id + ".edit")} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={"game.kingdom.list"} id={"game.kingdom.home.back"} href={link(id + ".list")} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link(id)} icon={<KingdomIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link(id + ".edit")} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"game.sign-out"} id={"game"} href={link("game.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={match(id + ".dashboard")} element={<DefaultMenu/>}/>
			<Route path={match(id + ".create")} element={<DefaultMenu/>}/>
			<Route path={match(id + ".list")} element={<DefaultMenu/>}/>
		</Routes>
	);
};

const KingdomMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<KingdomIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link(id + ".dashboard")} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link(id + ".create")} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link(id + ".list")} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

// const KingdomMenuRoute = () => route(link.match(), <Menu/>);

export {
	KingdomMenuItem,
	// KingdomMenuRoute,
};
