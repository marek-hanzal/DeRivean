import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import EditIcon from "component/icon/EditIcon";
import ListIcon from "component/icon/ListIcon";
import BaseMenu from "component/menu/BaseMenu";
import MenuDivider from "component/menu/MenuDivider";
import MenuGroup from "component/menu/MenuGroup";
import MenuItem from "component/menu/MenuItem";
import BaseRoutes from "component/route/BaseRoutes";
import HomeMenuItem from "site/common/menu/HomeMenuItem";
import LogoutMenuItem from "site/common/menu/LogoutMenuItem";
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "root.translation";
const link = Routes.root.translation;

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.home.match(), <BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"} id={"root"} href={Routes.root}/>
					<MenuDivider/>

					<TranslationMenuItem key={id}>
						<MenuItem key={`${id}.edit`} id={`${id}.edit`} href={link.edit} icon={<EditIcon/>}/>
					</TranslationMenuItem>,

					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
				route("*", <BaseMenu>
					<MenuDivider/>
					<HomeMenuItem key={"root.home"} id={"root"} href={Routes.root}/>
					<MenuDivider/>

					<TranslationMenuItem key={id}/>

					<MenuDivider/>
					<LogoutMenuItem key={"root.sign-out"} id={"root"} href={Routes.root.signOut}/>
				</BaseMenu>),
			]}
		/>
	);
};

const TranslationMenuItem = ({children, ...props}) => {
	return (
		<MenuGroup id={id} icon={<TranslationIcon/>} {...props}>
			<MenuItem key={`${id}.dashboard`} id={`${id}.dashboard`} href={link.dashboard} icon={<DashboardIcon/>}/>
			<MenuItem key={`${id}.create`} id={`${id}.create`} href={link.create} icon={<CreateIcon/>}/>
			<MenuItem key={`${id}.list`} id={`${id}.list`} href={link.list} icon={<ListIcon/>}/>
			{children}
		</MenuGroup>
	);
};

const TranslationMenuRoute = () => route(link.match(), <Menu/>);

export {
	TranslationMenuItem,
	TranslationMenuRoute,
};
