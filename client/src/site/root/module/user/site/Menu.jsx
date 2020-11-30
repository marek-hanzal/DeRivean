import {BaseMenu, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import AttributeIcon from "component/icon/AttributeIcon";
import BackIcon from "component/icon/BackIcon";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import {Route, Routes} from "react-router-dom";
import HomeMenuItem from "site/common/menu/HomeMenuItem";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import {KingdomMenuItem} from "site/root/module/kingdom/site/Menu";
import UserIcon from "site/root/module/user/component/icon/UserIcon";

const id = "root.user";

const Menu = () => {
	return (
		<Routes>
			<Route path={link.home.match()} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.home.back`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<UserIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<KingdomMenuItem key={"root.kingdom"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>
			}/>
			<Route path={link.edit.match()} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.home.back`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<UserIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuItem key={`${id}.attributes`} id={`${id}.attributes`} href={link.attributes} icon={<AttributeIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>
			}/>
			<Route path={link.attributes.match()} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.home.back`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<UserIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuItem key={`${id}.attributes`} id={`${id}.attributes`} href={link.attributes} icon={<AttributeIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>
			}/>
			<Route path={"*"} element={
				<BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"} id={"root"} href={Routes.root}/>
					<MenuDivider/>
					<UserMenuItem key={"root.user"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>
			}/>
		</Routes>
	);
};

const UserMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<UserIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

// const UserMenuRoute = () => route(link.match(), <Menu/>);

export {
	// UserMenuRoute,
	UserMenuItem,
};
