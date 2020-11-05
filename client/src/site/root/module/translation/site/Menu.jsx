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
import TranslationIcon from "site/root/module/translation/component/icon/TranslationIcon";
import Routes from "site/Routes";
import route from "utils/route/route";

const id = "root.translation";
const link = Routes.root.translation;

const Menu = () => {
	return (
		<BaseRoutes
			routes={[
				route(link.home.match(), <BaseMenu
					items={[
						<MenuDivider/>,
						<HomeMenuItem/>,
						<MenuDivider/>,

						<TranslationMenuItem>
							<MenuItem id={`${id}.edit`} href={link.edit.link()} icon={<EditIcon/>}/>
						</TranslationMenuItem>,

						<MenuDivider/>,
						<LogoutMenuItem/>,
					]}
				/>),
				route("*", <BaseMenu
					items={[
						<MenuDivider/>,
						<HomeMenuItem/>,
						<MenuDivider/>,

						<TranslationMenuItem/>,

						<MenuDivider/>,
						<LogoutMenuItem/>,
					]}
				/>),
			]}
		/>
	);
};

const TranslationMenuItem = ({children, ...props}) => {
	return (
		<MenuGroup id={id} icon={<TranslationIcon/>} {...props}>
			<MenuItem id={`${id}.dashboard`} href={link.dashboard.link()} icon={<DashboardIcon/>}/>
			<MenuItem id={`${id}.create`} href={link.create.link()} icon={<CreateIcon/>}/>
			<MenuItem id={`${id}.list`} href={link.list.link()} icon={<ListIcon/>}/>
			{children}
		</MenuGroup>
	);
};

const TranslationMenuRoute = () => route(link.match(), <Menu/>);

export {
	TranslationMenuItem,
	TranslationMenuRoute,
};
