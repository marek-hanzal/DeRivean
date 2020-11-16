import AttributeIcon from "component/icon/AttributeIcon";
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

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={`root.attribute-group.list`} id={`root.attribute-group.list`} href={link.list} icon={<GroupIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<AttributeIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
				// route(link.edit.match(), <BaseMenu>
				// 	<MenuDivider/>
				// 	<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<BackIcon/>}/>
				// 	<MenuDivider/>
				// 	<MenuItem key={id} id={id} href={link.home} icon={<GroupIcon/>}/>
				// 	<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
				// 	<MenuDivider/>
				// 	<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				// </BaseMenu>),
				route("*", <BaseMenu>
					<MenuDivider/>
					<MenuItem key={`root.attribute-group.list`} id={`root.attribute-group.list`} href={Routes.root.attributeGroup.home} icon={<GroupIcon/>}/>
					<MenuDivider/>
					<AttributeTypeMenuItem key={id}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
			]}
		/>
	);
};

const AttributeTypeMenuItem = (props) => {
	return (
		<MenuGroup id={id} {...props}>
			{/*<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>*/}
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
