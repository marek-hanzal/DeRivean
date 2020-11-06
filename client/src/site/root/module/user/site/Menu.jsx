import AttributeIcon from "component/icon/AttributeIcon";
import BackIcon from "component/icon/BackIcon";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuGroup from "component/menu/MenuGroup";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import HomeMenuItem from "site/root/component/menu/HomeMenuItem";
import LogoutMenuItem from "site/root/component/menu/LogoutMenuItem";
import {KingdomMenuItem} from "site/root/module/kingdom/site/Menu";
import UserIcon from "site/root/module/user/component/icon/UserIcon";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "root.user";
const link = Routes.root.user;

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}.list`} id={`${id}.home.back`} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<UserIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<KingdomMenuItem key={"root.kingdom"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"}/>
				</BaseMenu>),
				route(link.edit.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}.attributes`} id={`${id}.attributes`} href={link.attributes} icon={<AttributeIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"}/>
				</BaseMenu>),
				route("*", <BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"}/>
					<MenuDivider/>
					<UserMenuItem key={"root.user"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"}/>
				</BaseMenu>),
			]}
		/>
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

const UserMenuRoute = () => route(link.match(), <Menu/>);

export {
	UserMenuRoute,
	UserMenuItem,
};
