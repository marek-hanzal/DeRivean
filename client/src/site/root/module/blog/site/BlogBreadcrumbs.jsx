import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import BaseRoutes from "component/route/BaseRoutes";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import BlogPath from "site/root/module/blog/site/BlogPath";
import RootPath from "site/root/site/RootPath";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import route from "utils/route/route";

const BlogBreadcrumbs = () =>
	<BaseRoutes
		routes={[
			route(BlogPath.dashboard, <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(RootPath.root, <HomeIcon/>),
					breadcrumbCurrentItem("root.blog.dashboard", <BlogIcon/>),
				]}
			/>),
			route(BlogPath.create, <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(RootPath.root, <HomeIcon/>),
					breadcrumbItem("../" + BlogPath.dashboard, "root.blog.dashboard", <BlogIcon/>),
					breadcrumbCurrentItem("root.blog.create", <CreateIcon/>),
				]}
			/>),
		]}
	/>
;

export default BlogBreadcrumbs;
