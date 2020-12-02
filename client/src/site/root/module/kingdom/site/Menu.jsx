import {BackIcon, BaseMenu, CreateIcon, DashboardIcon, EditIcon, link, ListIcon, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import {Route, Routes} from "react-router-dom";
import AttributeIcon from "../../../../../component/icon/AttributeIcon";
import KingdomIcon from "../../../../common/icon/KingdomIcon";
import LogoutMenuItem from "../../../../common/menu/LogoutMenuItem";
import {BuildingMenuItem} from "../../building/site/Menu";
import {HeroMenuItem} from "../../hero/site/Menu";

const id = "root.kingdom";

const DefaultMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem id={"root.user"} href={Routes.root.user.home} icon={<BackIcon/>}/>
			<MenuDivider/>
			<KingdomMenuItem key={id} id={id}/>
			<MenuDivider/>
			<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
		</BaseMenu>
	);
};

const EditMenu = () => {
	return (
		<BaseMenu>
			<MenuDivider/>
			<MenuItem key={"root.kingdom.list"} id={"root.kingdom.home.back"} href={link.list} icon={<BackIcon/>}/>
			<MenuDivider/>
			<MenuItem key={id} id={id} href={link.home} icon={<KingdomIcon/>}/>
			<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
			<MenuItem key={`${id}.attributes`} id={`${id}.attributes`} href={link.attributes} icon={<AttributeIcon/>}/>
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
					<MenuItem key={"root.kingdom.list"} id={"root.kingdom.home.back"} href={link.list} icon={<BackIcon/>}/>
					<MenuDivider/>
					<MenuItem key={id} id={id} href={link.home} icon={<KingdomIcon/>}/>
					<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					<MenuDivider/>
					<HeroMenuItem key={"root.hero"}/>
					<MenuDivider/>
					<BuildingMenuItem key={"root.building"}/>
					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={link.edit.match()} element={<EditMenu/>}/>
			<Route path={link.attributes.match()} element={<EditMenu/>}/>
			<Route path={link.dashboard.match()} element={<DefaultMenu/>}/>
			<Route path={link.create.match()} element={<DefaultMenu/>}/>
			<Route path={link.list.match()} element={<DefaultMenu/>}/>
		</Routes>
	);
};

const KingdomMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<KingdomIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

// const KingdomMenuRoute = () => route(link.match(), <Menu/>);

export {
	KingdomMenuItem,
	// KingdomMenuRoute,
};
