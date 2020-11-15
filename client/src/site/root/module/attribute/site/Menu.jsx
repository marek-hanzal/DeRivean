import AttributeIcon from "component/icon/AttributeIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuGroup from "component/menu/MenuGroup";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import BuildingIcon from "site/common/icon/BuildingIcon";
import HeroIcon from "site/common/icon/HeroIcon";
import HomeMenuItem from "site/common/menu/HomeMenuItem";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "root.attribute";
const link = Routes.root.attribute;

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route("*", <BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"} id={"root"} href={Routes.root}/>
					<MenuDivider/>
					<AttributeMenuItem key={"root.attribute"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
			]}
		/>
	);
};

const AttributeMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<AttributeIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.building`} id={`${id}.building`} href={link.building} icon={<BuildingIcon/>}/>
			<MenuItem key={`${id}.hero`} id={`${id}.hero`} href={link.hero} icon={<HeroIcon/>}/>
		</MenuGroup>
	);
};

const AttributeMenuRoute = () => route(link.match(), <Menu/>);

export {
	AttributeMenuRoute,
	AttributeMenuItem,
};
