import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import Routes from "site/root/module/blog/site/Routes";
import RootPath from "site/root/site/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const Menu = () =>
	<BaseRoutes
		routes={[
			route("*", <BaseMenu
				items={[
					menuItem(Routes.route.up, "root.home", <HomeIcon/>),
					menuItem(Routes.route.dashboard, "root.blog.dashboard", <BlogIcon/>),
					menuDivider(),
					menuItem(Routes.route.create, "root.blog.create", <CreateIcon/>),
					menuDivider(),
					menuItem(RootPath.link.signOut(), "root.sign-out", <SignOutIcon/>),
				]}
			/>),
		]}
	/>
;

const BlogMenuRoute = () => route(Routes.route.root, <Menu/>);

const BlogMenuItem = () => menuItem(Routes.absolute.dashboard, "root.blog.dashboard", <BlogIcon/>);

export {
	BlogMenuRoute,
	BlogMenuItem,
};
