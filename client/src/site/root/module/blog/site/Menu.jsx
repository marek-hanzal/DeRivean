import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import Routes from "site/Routes";
import menuGroup from "utils/menu/menuGroup";
import menuItem from "utils/menu/menuItem";

const BlogMenuItem = () => menuGroup("root.blog", <BlogIcon/>, [
	menuItem(Routes.root.blog.dashboard.link(), "root.blog.dashboard", <DashboardIcon/>),
	menuItem(Routes.root.blog.create.link(), "root.blog.create", <CreateIcon/>),
	menuItem(Routes.root.blog.list.link(), "root.blog.list", <ListIcon/>),
]);

export {
	BlogMenuItem,
};
