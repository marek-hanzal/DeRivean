import BaseBreadcrumbs from "component/breadcrumbs/BaseBreadcrumbs";
import CreateIcon from "component/icon/CreateIcon";
import HomeIcon from "component/icon/HomeIcon";
import BaseRoutes from "component/route/BaseRoutes";
import BlogIcon from "site/root/module/blog/component/icon/BlogIcon";
import Routes from "site/root/module/blog/site/Routes";
import breadcrumbCurrentItem from "utils/breadcrumbs/breadcrumbCurrentItem";
import breadcrumbIconItem from "utils/breadcrumbs/breadcrumbIconItem";
import breadcrumbItem from "utils/breadcrumbs/breadcrumbItem";
import route from "utils/route/route";

const Breadcrumbs = () =>
	<BaseRoutes
		routes={[
			route(Routes.route.dashboard, <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.route.up, <HomeIcon/>),
					breadcrumbCurrentItem("root.blog.dashboard", <BlogIcon/>),
				]}
			/>),
			route(Routes.route.create, <BaseBreadcrumbs
				items={[
					breadcrumbIconItem(Routes.route.up, <HomeIcon/>),
					breadcrumbItem(Routes.relative.dashboard, "root.blog.dashboard", <BlogIcon/>),
					breadcrumbCurrentItem("root.blog.create", <CreateIcon/>),
				]}
			/>),
		]}
	/>
;

const BlogBreadcrumbRoute = () => route(Routes.route.root, <Breadcrumbs/>);

export {
	BlogBreadcrumbRoute,
};
