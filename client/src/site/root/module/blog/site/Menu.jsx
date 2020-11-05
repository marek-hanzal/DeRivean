import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import MenuGroup from "component/menu/MenuGroup";
import MenuItem from "component/menu/MenuItem";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import Routes from "site/Routes";

const id = "root.blog";
const link = Routes.root.blog;

const BlogMenuItem = (props) => {
	return (
		<MenuGroup id={id} icon={<BlogIcon/>} {...props}>
			<MenuItem id={`${id}.dashboard`} href={link.dashboard.link()} icon={<DashboardIcon/>}/>
			<MenuItem id={`${id}.create`} href={link.create.link()} icon={<CreateIcon/>}/>
			<MenuItem id={`${id}.list`} href={link.list.link()} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

export {
	BlogMenuItem,
};
