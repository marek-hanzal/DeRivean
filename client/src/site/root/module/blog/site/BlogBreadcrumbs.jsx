import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import {Route, Routes} from "react-router";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import BlogPath from "site/root/module/blog/site/BlogPath";
import RootPath from "site/root/site/RootPath";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";

const DashboardBreadcrumbs = () =>
	<BaseBreadcrumbs
		items={[
			breadcrumbIconItem(RootPath.root, <HomeIcon/>),
			breadcrumbCurrentItem("root.blog.dashboard", <BlogIcon/>),
		]}
	/>
;

const CreateBreadcrumbs = () =>
	<BaseBreadcrumbs
		items={[
			breadcrumbIconItem(RootPath.root, <HomeIcon/>),
			breadcrumbItem("../" + BlogPath.dashboard, "root.blog.dashboard", <BlogIcon/>),
			breadcrumbCurrentItem("root.blog.create", <CreateIcon/>),
		]}
	/>
;

const BlogBreadcrumbs = () =>
	<Routes>
		<Route path={BlogPath.dashboard} element={<DashboardBreadcrumbs/>}/>
		<Route path={BlogPath.create} element={<CreateBreadcrumbs/>}/>
	</Routes>
;

export default BlogBreadcrumbs;
