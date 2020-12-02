import {BackIcon, BaseMenu, CreateIcon, DashboardIcon, EditIcon, link, ListIcon, match, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import {Route, Routes} from "react-router-dom";
import AttributeIcon from "../../../../../component/icon/AttributeIcon";
import HomeMenuItem from "../../../../common/menu/HomeMenuItem";
import LogoutMenuItem from "../../../../common/menu/LogoutMenuItem";
import {KingdomMenuItem} from "../../kingdom/site/Menu";
import UserIcon from "../component/icon/UserIcon";

const id = "root.user";

const Menu = () => {
	return (
		<Routes>
			<Route path={match(id + ".home")} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={id + ".list"} id={id + ".home.back"} href={link(id + ".list")} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link(id + ".home")} icon={<UserIcon/>}/>
					<MenuItem key={id + ".edit"} id={id + ".edit"} href={link(id + ".edit")} icon={<EditIcon/>}/>
					<MenuDivider/>
					<KingdomMenuItem key={"root.kingdom"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={match(id + ".edit")} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={id + ".list"} id={id + ".home.back"} href={link(id + ".list")} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link(id + ".home")} icon={<UserIcon/>}/>
					<MenuItem key={id + ".edit"} id={id + ".edit"} href={link(id + ".edit")} icon={<EditIcon/>}/>
					<MenuItem key={id + ".attributes"} id={id + ".attributes"} href={link(id + ".attributes")} icon={<AttributeIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={match(id + ".attributes")} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={id + ".list"} id={id + ".home.back"} href={link(id + ".list")} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link(id + ".home")} icon={<UserIcon/>}/>
					<MenuItem key={id + ".edit"} id={id + ".edit"} href={link(id + ".edit")} icon={<EditIcon/>}/>
					<MenuItem key={id + ".attributes"} id={id + ".attributes"} href={link(id + ".attributes")} icon={<AttributeIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={"*"} element={
				<BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"} id={"root"} href={link("root")}/>
					<MenuDivider/>
					<UserMenuItem key={"root.user"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
		</Routes>
	);
};

const UserMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<UserIcon/>} {...props}>
			<MenuItem key={id + ".dashboard"} id={id + ".dashboard"} href={link(id + ".dashboard")} icon={<DashboardIcon/>}/>
			<MenuItem key={id + ".create"} id={id + ".create"} href={link(id + ".create")} icon={<CreateIcon/>}/>
			<MenuItem key={id + ".list"} id={id + ".list"} href={link(id + ".list")} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

// const UserMenuRoute = () => route(link.match(), <Menu/>);

export {
	// UserMenuRoute,
	UserMenuItem,
};
