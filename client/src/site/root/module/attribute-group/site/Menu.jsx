import BackIcon from "component/icon/BackIcon";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import GroupIcon from "component/icon/GroupIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuGroup from "component/menu/MenuGroup";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import HomeMenuItem from "site/common/menu/HomeMenuItem";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import {AttributeTypeMenuItem} from "site/root/module/attribute-type/site/Menu";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "root.attribute-group";
const link = Routes.root.attributeGroup;

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuGroup id={id}>
						<MenuItem key={id} id={id} href={link.home} icon={<GroupIcon/>}/>
						<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					</MenuGroup>
					<MenuDivider/>
					<AttributeTypeMenuItem key={"root.attribute-type"} id={"root.attribute-type"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
				route(link.edit.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuGroup id={id}>
						<MenuItem key={id} id={id} href={link.home} icon={<GroupIcon/>}/>
						<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					</MenuGroup>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
				route("*", <BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"} id={"root"} href={Routes.root}/>
					<MenuDivider/>
					<AttributeGroupMenuItem key={id}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
			]}
		/>
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

const AttributeGroupMenuRoute = () => route(link.match(), <Menu/>);

export {
	AttributeGroupMenuItem,
	AttributeGroupMenuRoute,
};
