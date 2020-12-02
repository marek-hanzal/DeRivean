import {BackIcon, BaseMenu, CreateIcon, DashboardIcon, EditIcon, GroupIcon, link, ListIcon, match, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import {Route, Routes} from "react-router-dom";
import HomeMenuItem from "../../../../common/menu/HomeMenuItem";
import LogoutMenuItem from "../../../../common/menu/LogoutMenuItem";
import {AttributeTypeMenuItem} from "../../attribute-type/site/Menu";

const id = "root.attribute-group";

const Menu = () => {
	return (
		<Routes>
			<Route path={match(id)} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuGroup id={id}>
						<MenuItem key={id} id={id} href={link(id)} icon={<GroupIcon/>}/>
						<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					</MenuGroup>
					<MenuDivider/>
					<AttributeTypeMenuItem key={"root.attribute-type"} id={"root.attribute-type"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={match(id + ".edit")} element={
				<BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuGroup id={id}>
						<MenuItem key={id} id={id} href={link.home} icon={<GroupIcon/>}/>
						<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					</MenuGroup>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={"*"} element={
				<BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"} id={"root"} href={link("root")}/>
					<MenuDivider/>
					<AttributeGroupMenuItem key={id}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
		</Routes>
	);
};

const AttributeGroupMenuItem = (props) => {
	return (
		<MenuGroup id={id} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

// const AttributeGroupMenuRoute = () => route(match(id), <Menu/>);

export {
	AttributeGroupMenuItem,
	// AttributeGroupMenuRoute,
};
