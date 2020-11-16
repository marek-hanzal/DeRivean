import AttributeIcon from "component/icon/AttributeIcon";
import BackIcon from "component/icon/BackIcon";
import CreateIcon from "component/icon/CreateIcon";
import EditIcon from "component/icon/EditIcon";
import GroupIcon from "component/icon/GroupIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuGroup from "component/menu/MenuGroup";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "root.attribute-type";
const link = Routes.root.attributeType;

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
			<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={`root.attribute-type.list`} id={`root.attribute-type.list`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<AttributeIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
				route(link.edit.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={`root.attribute-type.list`} id={`root.attribute-type.list`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<AttributeIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
				route(link.create.match(), <DefaultMenu/>),
				route(link.list.match(), <DefaultMenu/>),
			]}
		/>
	);
};

const AttributeTypeMenuItem = (props) => {
	return (
		<MenuGroup id={id} {...props}>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

const AttributeTypeMenuRoute = () => route(link.match(), <Menu/>);

export {
	AttributeTypeMenuItem,
	AttributeTypeMenuRoute,
};
