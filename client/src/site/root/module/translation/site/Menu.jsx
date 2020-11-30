import {BaseMenu, link, match, MenuDivider, MenuGroup, MenuItem} from "@leight-core/leight";
import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import {Route, Routes} from "react-router-dom";
import HomeMenuItem from "site/common/menu/HomeMenuItem";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";

const id = "root.translation";

const Menu = () => {
	return (
		<Routes>
			<Route path={match(id)} element={
				<BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"} id={"root"} href={link("root")}/>
					<MenuDivider/>

					<TranslationMenuItem key={id}>
						<MenuItem key={id + ".edit"} id={id + ".edit"} href={link(id + ".edit")} icon={<EditIcon/>}/>
					</TranslationMenuItem>,

					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
			<Route path={"*"} element={
				<BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"} id={"root"} href={link("root")}/>
					<MenuDivider/>

					<TranslationMenuItem key={id}/>

					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={link("root.sign-out")}/>
				</BaseMenu>
			}/>
		</Routes>
	);
};

const TranslationMenuItem = ({children, ...props}) => {
	return (
		<MenuGroup id={id} icon={<TranslationIcon/>} {...props}>
			<MenuItem key={id + ".dashboard"} id={id + ".dashboard"} href={link(id + ".dashboard")} icon={<DashboardIcon/>}/>
			<MenuItem key={id + ".create"} id={id + ".create"} href={link(id + ".create")} icon={<CreateIcon/>}/>
			<MenuItem key={id + ".list"} id={id + ".list"} href={link(id + ".list")} icon={<ListIcon/>}/>
			{children}
		</MenuGroup>
	);
};

// const TranslationMenuRoute = () => route(link.match(), <Menu/>);

export {
	TranslationMenuItem,
	// TranslationMenuRoute,
};
