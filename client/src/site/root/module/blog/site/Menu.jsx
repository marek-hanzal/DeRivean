import CreateIcon from "component/icon/CreateIcon";
import DashboardIcon from "component/icon/DashboardIcon";
import ListIcon from "component/icon/ListIcon";
import MenuGroup from "component/menu/MenuGroup";
import MenuItem from "component/menu/MenuItem";
import PropTypes from "prop-types";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import Routes from "site/Routes";

const link = Routes.root.blog;

const BlogMenuItem = ({key, ...props}) => {
	return (
		<MenuGroup key={key} icon={<BlogIcon/>} {...props}>
			<MenuItem key={`${key}.dashboard`} href={link.dashboard.link()} icon={<DashboardIcon/>}/>
			<MenuItem key={`${key}.create`} href={link.create.link()} icon={<CreateIcon/>}/>
			<MenuItem key={`${key}.list`} href={link.list.link()} icon={<ListIcon/>}/>
		</MenuGroup>
	);
};

BlogMenuItem.propTypes = {
	key: PropTypes.string.isRequired,
};

export {
	BlogMenuItem,
};
