import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import BaseRoutes from "component/route/BaseRoutes";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import Routes from "site/Routes";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import route from "utils/route/route";

const Breadcrumbs = () =>
	<BaseRoutes
		routes={[
			route(Routes.root.blog.dashboard.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbCurrentItem("root.blog.dashboard", <BlogIcon/>),
				]}
			/>),
			route(Routes.root.blog.create.match(), <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.root.link(), <HomeIcon/>),
					breadcrumbItem(Routes.root.blog.dashboard.link(), "root.blog.dashboard", <BlogIcon/>),
					breadcrumbCurrentItem("root.blog.create", <CreateIcon/>),
				]}
			/>),
		]}
	/>
;

const BlogBreadcrumbRoute = () => route(Routes.root.blog.match(), <Breadcrumbs/>);

export {
	BlogBreadcrumbRoute,
};
