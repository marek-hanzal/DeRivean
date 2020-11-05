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
import PropTypes from "prop-types";
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
					<MenuItem key={`${id}.dashboard`} href={link.dashboard.link()} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}`} href={link.home.link()} icon={<UserIcon/>}/>
					<MenuItem key={`${id}.edit`} href={link.edit.link()} icon={<EditIcon/>}/>
					<MenuDivider/>
					<KingdomMenuItem/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"}/>
				</BaseMenu>),
				route(link.edit.match(), <BaseMenu>
					<MenuDivider/>
					<MenuItem key={`${id}`} href={link.home.link()} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}.edit`} href={link.edit.link()} icon={<EditIcon/>}/>
					<MenuDivider/>
					<MenuItem key={`${id}.attributes`} href={link.attributes.link()} icon={<AttributeIcon/>}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"}/>
				</BaseMenu>),
				route("*", <BaseMenu>
					<MenuDivider/>
					<HomeMenuItem/>
					<MenuDivider/>
					<UserMenuItem key={"root.user"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"}/>
				</BaseMenu>),
			]}
		/>
	);
};

const UserMenuItem = ({key, props}) => {
	return (
		<MenuGroup key={key} icon={<UserIcon/>} {...props}>
			<MenuItem key={`${key}.dashboard`} href={link.dashboard.link()} icon={<DashboardIcon/>}/>
			<MenuItem key={`${key}.create`} href={link.create.link()} icon={<CreateIcon/>}/>
			<MenuItem key={`${key}.list`} href={link.list.link()} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

UserMenuItem.propTypes = {
	key: PropTypes.string.isRequired,
};

const UserMenuRoute = () => route(link.match(), <Menu/>);

export {
	UserMenuRoute,
	UserMenuItem,
};
