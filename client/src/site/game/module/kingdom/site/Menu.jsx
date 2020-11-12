import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuGroup from "component/menu/MenuGroup";
import BaseRoutes from "component/route/BaseRoutes";
import KingdomIcon from "site/common/icon/KingdomIcon";
import HomeMenuItem from "site/common/menu/HomeMenuItem";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "game.kingdom";
const link = Routes.game.kingdom;

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<HomeMenuItem id={"game"} href={Routes.game}/>
			<MenuDivider/>
			<KingdomMenuItem key={id} id={id}/>
			<MenuDivider/>
			<LogoutMenuItem key={"game.sign-out"} id={"game"} href={Routes.game.signOut}/>
		</BaseMenu>
	);
};

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				// route(link.home.match(), <BaseMenu>
				// 	<MenuDivider/>
				// 	<MenuItem key={"root.kingdom.list"} id={"root.kingdom.home.back"} href={Routes.root.kingdom.list} icon={<BackIcon/>}/>
				// 	<MenuDivider/>
				// 	<MenuItem key={id} id={id} href={link.home} icon={<KingdomIcon/>}/>
				// 	<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
				// 	<MenuDivider/>
				// 	<HeroMenuItem key={"root.hero"}/>
				// 	<MenuDivider/>
				// 	<BuildingMenuItem key={"root.building"}/>
				// 	<MenuDivider/>
				// 	<LogoutMenuItem/>
				// </BaseMenu>),
				// route(link.edit.match(), <BaseMenu>
				// 	<MenuDivider/>
				// 	<MenuItem key={id} id={id} href={link.home} icon={<BackIcon/>}/>
				// 	<MenuDivider/>
				// 	<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
				// 	<MenuDivider/>
				// 	<MenuItem key={`${id}.attributes`} id={`${id}.attributes`} href={link.attributes} icon={<AttributeIcon/>}/>
				// 	<MenuDivider/>
				// 	<LogoutMenuItem/>
				// </BaseMenu>),
				route(link.dashboard.match(), <DefaultMenu/>),
				route(link.create.match(), <DefaultMenu/>),
				route(link.list.match(), <DefaultMenu/>),
			]}
		/>
	);
};

const KingdomMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<KingdomIcon/>} {...props}>
			{/*<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>*/}
			{/*<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>*/}
			{/*<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>*/}
		</MenuGroup>
	);
};

const KingdomMenuRoute = () => route(link.match(), <Menu/>);

export {
	KingdomMenuItem,
	KingdomMenuRoute,
};
