import {BackIcon, BaseMenu, CreateIcon, DashboardIcon, EditIcon, GroupIcon, link, ListIcon, match, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import {Route, Routes} from "react-router-dom";
import AttributeIcon from "../../../../../component/icon/AttributeIcon";
import LogoutMenuItem from "../../../../common/menu/LogoutMenuItem";

const id = "root.attribute-type";

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem key={"root.attribute-group.list"} id={"root.attribute-group.list"} href={link("root.attribute-group.list")} icon={<BackIcon/>}/>
			<MenuDivider/>
			<MenuGroup id={"root.attribute-group"}>
				<MenuItem key={"root.attribute-group"} id={"root.attribute-group"} href={link("root.attributeGroup.home")} icon={<GroupIcon/>}/>
				<MenuItem key={"root.attribute-group.edit"} id={"root.attribute-group.edit"} href={link("root.attributeGroup.edit")} icon={<EditIcon/>}/>
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
			<Route path={match(id + ".home")} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={"root.attribute-type.list"} id={"root.attribute-type.list"} href={link(id + ".list")} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link(id + ".home")} icon={<AttributeIcon/>}/>
					<MenuItem key={id + ".edit"} id={id + ".edit"} href={link(id + ".edit")} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={match(id + ".edit")} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={"root.attribute-type.list"} id={"root.attribute-type.list"} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<AttributeIcon/>}/>
					<MenuItem key={id + ".edit"} id={id + ".edit"} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={match(id + ".dashboard")} element={<DefaultMenu/>}/>
			<Route path={match(id + ".create")} element={<DefaultMenu/>}/>
			<Route path={match(id + ".list")} element={<DefaultMenu/>}/>
		</Routes>
	);
};

const AttributeTypeMenuItem = (props) => {
	return (
		<MenuGroup id={id} {...props}>
			<MenuItem key={id + ".dashboard"} id={id + ".dashboard"} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={id + ".create"} id={id + ".create"} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={id + ".list"} id={id + ".list"} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

// const AttributeTypeMenuRoute = () => route(link.match(), <Menu/>);

export {
	AttributeTypeMenuItem,
	// AttributeTypeMenuRoute,
};
