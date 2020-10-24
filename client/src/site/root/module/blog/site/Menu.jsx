import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import Routes from "site/Routes";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";
import route from "utils/route/route";

const Menu = () =>
	<BaseRoutes
		routes={[
			route("*", <BaseMenu
				items={[
					menuItem(Routes.root.link(), "root.home", <HomeIcon/>),
					menuItem(Routes.root.blog.dashboard.link(), "root.blog.dashboard", <BlogIcon/>),
					menuDivider(),
					menuItem(Routes.root.blog.create.link(), "root.blog.create", <CreateIcon/>),
					menuDivider(),
					menuItem(Routes.root.signOut.link(), "root.sign-out", <SignOutIcon/>),
				]}
			/>),
		]}
	/>
;

const BlogMenuRoute = () => route(Routes.root.blog.match(), <Menu/>);

const BlogMenuItem = () => menuItem(Routes.root.blog.dashboard.link(), "root.blog.dashboard", <BlogIcon/>);

export {
	BlogMenuRoute,
	BlogMenuItem,
};
