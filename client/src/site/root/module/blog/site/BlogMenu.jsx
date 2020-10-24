import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import SignOutIcon from "component/icon/SignOutIcon";
import BaseMenu from "component/menu/BaseMenu";
import BaseRoutes from "component/route/BaseRoutes";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import BlogPath from "site/root/module/blog/site/BlogPath";
import RootPath from "site/root/site/RootPath";
import menuDivider from "utils/menu/menuDivider";
import menuItem from "utils/menu/menuItem";

const BlogMenu = () =>
	<BaseRoutes
		routes={{
			"*":
				<BaseMenu
					items={[
						menuItem(RootPath.root, "root.home", <HomeIcon/>),
						menuItem(BlogPath.link.dashboard(), "root.blog.dashboard", <BlogIcon/>),
						menuDivider(),
						menuItem(BlogPath.link.create(), "root.blog.create", <CreateIcon/>),
						menuDivider(),
						menuItem(RootPath.link.signOut(), "root.sign-out", <SignOutIcon/>),
					]}
				/>,
		}}
	/>
;

export default BlogMenu;
