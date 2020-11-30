import {BaseMenu, link, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import AttributeIcon from "component/icon/AttributeIcon";
import BackIcon from "component/icon/BackIcon";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import GroupIcon from "component/icon/GroupIcon";
import ListIcon from "component/icon/ListIcon";
import {Route} from "react-router-dom";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";

const id = "root.attribute-type";

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem key={`root.attribute-group.list`} id={`root.attribute-group.list`} href={Routes.root.attributeGroup.list} icon={<BackIcon/>}/>
			<MenuDivider/>
			<MenuGroup id={"root.attribute-group"}>
				<MenuItem key={"root.attribute-group"} id={"root.attribute-group"} href={Routes.root.attributeGroup.home} icon={<GroupIcon/>}/>
				<MenuItem key={"root.attribute-group.edit"} id={"root.attribute-group.edit"} href={Routes.root.attributeGroup.edit} icon={<EditIcon/>}/>
			</MenuGroup>
			<MenuDivider/>
			<AttributeTypeMenuItem key={id}/>
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
					<MenuItem key={`root.attribute-type.list`} id={`root.attribute-type.list`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<AttributeIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={link.edit.match()} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={`root.attribute-type.list`} id={`root.attribute-type.list`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<AttributeIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={link.dashboard.match()} element={<DefaultMenu/>}/>
			<Route path={link.create.match()} element={<DefaultMenu/>}/>
			<Route path={link.list.match()} element={<DefaultMenu/>}/>
		</Routes>
	);
};

const AttributeTypeMenuItem = (props) => {
	return (
		<MenuGroup id={id} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

// const AttributeTypeMenuRoute = () => route(link.match(), <Menu/>);

export {
	AttributeTypeMenuItem,
	// AttributeTypeMenuRoute,
};
