import {BaseMenu, link, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import AttributeIcon from "component/icon/AttributeIcon";
import BackIcon from "component/icon/BackIcon";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import {Route, Routes} from "react-router-dom";
import BuildingIcon from "site/common/icon/BuildingIcon";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";

const id = "root.building";

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem key={"root.kingdom"} id={"root.kingdom"} href={link("root.kingdom.home")} icon={<BackIcon/>}/>
			<MenuDivider/>
			<BuildingMenuItem key={id}/>
			<MenuDivider/>
			<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<Routes>
			<Route path={link.home.match()} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.home.back`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<BuildingIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>
			}/>
			<Route path={link.edit.match()} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.home.back`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<BuildingIcon/>}/>
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
					<MenuItem key={id} id={id} href={link.home} icon={<BuildingIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuItem key={`${id}.attributes`} id={`${id}.attributes`} href={link.attributes} icon={<AttributeIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>
			}/>
			<Route path={link.dashboard.match()} element={<DefaultMenu/>}/>
			<Route path={link.create.match()} element={<DefaultMenu/>}/>
			<Route path={link.list.match()} element={<DefaultMenu/>}/>
		</Routes>
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

// const BuildingMenuRoute = () => route(link.match(), <Menu/>);

export {
	BuildingMenuItem,
	// BuildingMenuRoute,
};
